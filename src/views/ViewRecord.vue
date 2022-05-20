<template>
  <div>
    <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>

    <div v-if="fetchOK">
      <h2>
        {{ record.top.value }}
        <span v-for="lvl in record.top.levels" :key="lvl.class"
              :class="`badge ${lvl.class}`">{{ lvl.level }}</span>
      </h2>
      <div><strong>Thread:</strong> #{{ record.threadID }}</div>
      <div><strong>Datetime:</strong> {{ record.top.dt }}</div>

      <nav class="mt-2">
        <ul class="pagination">
          <li class="page-item">
            <router-link :to="{name: 'stage', params: {id: tid, vid: vid, gid: gid}}"
                         class="page-link"
                         title="Go to main trace view"><b-icon-arrow-up></b-icon-arrow-up></router-link>
          </li>
          <li class="page-item"
              v-bind:class="{'disabled': record.prev === undefined || record.prev === 0}">
            <router-link :to="{name: 'record', params: {id: tid, vid: vid, gid: gid, rid: record.prev}}"
                         class="page-link"
                         title="Previous record in current thread">Previous</router-link>
          </li>
          <li class="page-item"
              v-bind:class="{'disabled': record.next === undefined || record.next === 0}">
            <router-link :to="{name: 'record', params: {id: tid, vid: vid, gid: gid, rid: record.next}}"
                         class="page-link"
                         title="Next record in current thread">Next</router-link>
          </li>
        </ul>
      </nav>

      <table v-if="record.rows.length > 0"
             class="table table-sm table-hover mt-3">
        <thead>
        <tr>
          <th scope="col" style="width: 15%;">Name</th>
          <th scope="col" style="width: 5%;">Level</th>
          <th scope="col">Value</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="v in record.rows" :key="v.id">
          <td>{{ v.name }}</td>
          <td>
            <span v-for="lvl in v.levels" :key="lvl.class"
                  :class="`badge ${lvl.class}`">{{ lvl.level }}</span>
          </td>
          <td><pre>{{ v.value }}</pre></td>
        </tr>
        </tbody>
      </table>
      <router-link v-else-if="record.threadIn !== undefined && record.threadIn > 0"
                   :to="{name: 'record', params: {id: tid, vid: vid, gid: gid, rid: record.threadIn}}"
                   title="Dive to thread trace"><b-icon-box-arrow-in-down-right></b-icon-box-arrow-in-down-right> Go to thread</router-link>
      <router-link v-else-if="record.top.type === 'TH_REL' && record.next !== 0"
                   :to="{name: 'record', params: {id: tid, vid: vid, gid: gid, rid: record.next}}"
                   title="Go to first record after release in parent trace"><b-icon-box-arrow-down-right></b-icon-box-arrow-down-right> Continue in parent thread</router-link>
    </div>
    <div v-else-if="fetchFail"
         class="alert alert-warning"
         role="alert">Record #{{ rid }} not found. Go back to service <router-link :to="{name: 'stage', params: {tid: tid, vid: vid, gid: gid}}">{{ vid }}</router-link>.
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapLvlBadge } from '@/const';

export default {
  name: "ViewRecord",
  data() {
    let tid = this.$route.params.id;
    let vid = this.$route.params.vid;
    let gid = this.$route.params.gid;
    let rid = this.$route.params.rid;

    let bc = [
      {
        text: 'Home',
        to: {name: 'home'},
        active: false
      }
    ];
    bc.push({
      text: tid,
      to: {name: 'trace', params: {id: tid}},
      active: false
    });
    bc.push({
      text: vid,
      to: {name: 'service', params: {id: tid, vid: vid}},
      active: false
    });
    bc.push({
      text: gid,
      to: {name: 'service', params: {id: tid, vid: vid, gid: gid}},
      active: false
    });
    bc.push({
      text: "#"+rid,
      to: {name: 'record'},
      active: true
    });
    return {
      breadcrumbs: bc,
      tid: this.$route.params.id,
      vid: this.$route.params.vid,
      gid: this.$route.params.gid,
      rid: this.$route.params.rid,
      fetchOK: this.fetchOK,
      fetchFail: this.fetchFail,
      record: this.record,
    };
  },
  mounted() {
    this.fetchOK = false;
    this.fetchFail = false;
    this.record = null;
    fetch(process.env.VUE_APP_API_URL + "/record/" + this.$route.params.rid, {"method": "GET"})
        .then(response => {
          if (response.ok) {
            return response.json()
          } else{
            console.error("Server returned " + response.status + " : " + response.statusText);
          }
        })
        .then(response => {
          this.fetchOK = true;
          this.record = response.payload;

          for (let i in this.record.rows) {
            let row = this.record.rows[i];
            for (let j in row.levels) {
              let lvl = row.levels[j];
              row.levels[j] = {
                level: lvl,
                class: mapLvlBadge[lvl]
              };
            }
          }
          this.record.top = this.record.rows[0];
          this.record.rows.shift();
          switch (this.record.top.type) {
            case "TH_ACQ":
              this.record.top.value = "Thread #" + this.record.threadID + ": acquire thread #" + this.record.top.value;
              break;
            case "TH_REL":
              this.record.top.value = "Thread #" + this.record.threadID + ": release thread #" + this.record.top.value;
              break;
          }
        })
        .catch(err => {
          console.log(err);
          this.fetchFail = true;
        });
  }
}
</script>

<style scoped src="../assets/styles/view.css"></style>
