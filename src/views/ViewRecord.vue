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

      <nav aria-label="Page navigation example" class="mt-2">
        <ul class="pagination">
          <li v-if="record.prev === undefined || record.prev === 0"
              class="page-item">
            <router-link :to="{name: 'trace', params: {id: tid, sid: sid}}"
                         class="page-link"
                         title="Go to main trace view"><b-icon-box-arrow-left></b-icon-box-arrow-left></router-link>
          </li>
          <li class="page-item"
              v-bind:class="{'disabled': record.prev === undefined || record.prev === 0}">
            <router-link :to="{name: 'record', params: {id: tid, sid: sid, rid: record.prev}}"
                         class="page-link"
                         title="Previous record in thread">Previous</router-link>
          </li>
          <li class="page-item"
              v-bind:class="{'disabled': record.next === undefined || record.next === 0}">
            <router-link :to="{name: 'record', params: {id: tid, sid: sid, rid: record.next}}"
                         class="page-link"
                         title="Next record in thread">Next</router-link>
          </li>
          <li v-if="record.next === undefined || record.next === 0"
              class="page-item">
            <router-link :to="{name: 'trace', params: {id: tid, sid: sid}}"
                         class="page-link"
                         title="Go to main trace view"><b-icon-box-arrow-right></b-icon-box-arrow-right></router-link>
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
    </div>
    <div v-else-if="fetchFail"
         class="alert alert-warning"
         role="alert">Record #{{ rid }} not found. Go back to service <router-link :to="{name: 'service', params: {tid: tid, sid: sid}}">{{ sid }}</router-link>.
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
    let sid = this.$route.params.sid;
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
      text: sid,
      to: {name: 'service', params: {id: tid, sid: sid}},
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
      sid: this.$route.params.sid,
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
