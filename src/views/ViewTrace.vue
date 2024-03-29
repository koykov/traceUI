<template>
  <div>
    <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>

    <div v-if="fetchOK">
      <ul class="nav nav-tabs mb-3">
        <li v-for="(svc, i) in trace.services"
            :key="svc.id"
            class="nav-item">
          <router-link v-if="svc.id === vid || (vid === undefined && i === 0)"
                       :to="{name: 'service', params: {id: tid, vid: svc.id}}"
                       class="nav-link active"
                       aria-current="page">{{ svc.id }}</router-link>
          <router-link v-else
                       :to="{name: 'service', params: {id: tid, vid: svc.id}}"
                       class="nav-link">{{ svc.id }}</router-link>
        </li>
      </ul>

      <ul v-if="stage.length > 1" class="nav nav-pills mb-3">
        <li v-for="(stg, i) in stage"
            :key="stg.id"
            class="nav-item">
          <router-link v-if="stg.id === gid || (gid === undefined && i === 0)"
             :to="{name: 'stage', params: {id: tid, vid: vid, gid: stg.id}}"
             class="nav-link active"
             aria-current="page">{{ stg.id }}</router-link>
          <router-link v-else
             :to="{name: 'stage', params: {id: tid, vid: vid, gid: stg.id}}"
             class="nav-link"
             aria-current="page">{{ stg.id }}</router-link>
        </li>
      </ul>

      <div class="t-log">
        <div class="t-th-tree">
          <svg :width="treeWH.w"
               :height="treeWH.h"
               focusable="false"
               aria-hidden="true"
               class="t-flow-container">
            <g transform="translate(8, 36.705)">
              <rect x="-8"
                    y="0"
                    :width="treeWH.w"
                    :height="treeWH.h"
                    class="t-flow-rect"></rect>
              <template v-for="(itm, i) in tree">
                <circle :key="i" v-if="itm.typ === 'circle'"
                        :cx="itm.x"
                        :cy="itm.y"
                        :class="`t-flow-circle t-flow-circle-${itm.id} c${itm.cid}`"
                        :data-rid="itm.id"
                        r="2"
                        v-on:mouseover="onCircleMouseOver"
                        v-on:mouseleave="onCircleMouseLeave"
                        v-on:click="onRowClick"></circle>
                <path :key="i" v-if="itm.typ === 'line'"
                      :d="`M${itm.x0},${itm.y0} L${itm.xN},${itm.yN}`"
                      :class="`t-flow-line c${itm.cid}`"></path>
                <path :key="i" v-if="itm.typ === 'curve'"
                      :d="`M${itm.x0},${itm.y0} C${itm.xM},${itm.yM} ${itm.xN},${itm.yN} ${itm.xZ},${itm.yZ}`"
                      :class="`t-flow-line c${itm.cid}`"></path>
              </template>
            </g>
          </svg>
        </div>
        <div class="t-tab-container">
          <div class="t-tab-flex">
            <div class="t-tab-row table-responsive">
              <table class="t-tab table table-hover table-sm">
                <thead>
                <tr>
                  <th class="t-tab-h">Message</th>
                  <th class="t-tab-h">Datetime</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="rec in service" :key="rec.id"
                    :data-rid="rec.id"
                    :class="`t-row t-row-${rec.id} ${rec.lvl}`"
                    v-on:mouseover="onRowMouseOver"
                    v-on:mouseleave="onRowMouseLeave"
                    v-on:click="onRowClick">
                  <td class="t-tab-td">
                    <span v-if="rec.thtyp !== undefined && rec.thtyp === 'TH_ACQ'">
                      <ThreadAcqSvg/> Thread #{{ rec.thid }}: acquire child thread #{{ rec.chid }}.
                    </span>
                    <span v-else-if="rec.thtyp !== undefined && rec.thtyp === 'TH_REL'">
                      <ThreadRelSvg/> Thread #{{ rec.thid }}: release child thread #{{ rec.chid }}.
                    </span>
                    <span v-else>{{ rec.text }}</span>
                  </td>
                  <td class="t-tab-td">
                    <time :datetime="rec.dt"
                          :title="rec.dt">{{ rec.dt }}</time>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="fetchFail"
         class="alert alert-warning"
         role="alert">Trace ID #{{ tid }} not found. Go to <router-link :to="{name: 'home'}">home</router-link>.
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import ThreadAcqSvg from "@/components/ThreadAcqSvg";
import ThreadRelSvg from "@/components/ThreadRelSvg";
import { mapLvlTable } from '@/const';

export default {
  name: "ViewTrace",
  components: {ThreadAcqSvg, ThreadRelSvg},
  data() {
    let tid = this.$route.params.id;
    let vid = this.$route.params.vid;
    let gid = this.$route.params.gid;

    let bc = [
      {
        text: 'Home',
        to: {name: 'home'},
        active: false
      }
    ];
    if (vid !== undefined && vid.length > 0) {
      bc.push({
        text: tid,
        to: {name: 'trace', params: {id: tid}},
        active: false
      });
      if (gid !== undefined && gid.length > 0) {
        bc.push({
          text: vid,
          to: {name: 'service', params: {id: tid, vid: vid}},
          active: false
        });
        bc.push({
          text: gid,
          to: {name: 'stage', params: {id: tid, vid: vid, gid: gid}},
          active: true
        });
      } else {
        bc.push({
          text: vid,
          to: {name: 'service', params: {id: tid, vid: vid}},
          active: true
        });
      }
    } else {
      bc.push({
        text: tid,
        to: {name: 'trace'},
        active: true
      });
    }
    return {
      breadcrumbs: bc,
      tid: this.$route.params.id,
      vid: this.$route.params.vid,
      gid: this.$route.params.gid,
      fetchOK: this.fetchOK,
      fetchFail: this.fetchFail,
      trace: this.trace,
      service: this.service,
      stage: this.stage,

      tree: this.tree,
      treeWH: this.treeWH,
    };
  },
  methods: {
    onCircleMouseOver: function (e) {
      let rid = e.target.getAttribute('data-rid');
      let els = this.$el.getElementsByClassName('t-row');
      for (let el of els) {
        el.classList.remove('hover');
      }
      let lnk = this.$el.getElementsByClassName('t-row-' + rid);
      lnk[0].classList.add('hover');
    },
    onCircleMouseLeave: function () {
      let els = this.$el.getElementsByClassName('t-row');
      for (let el of els) {
        el.classList.remove('hover');
      }
    },
    onRowMouseOver: function (e) {
      let rid = e.target.getAttribute('data-rid');
      if (rid === null) {
        let el = e.target;
        for (let i=0; i<10; i++) {
          el = el.parentElement;
          rid = el.getAttribute('data-rid');
          if (rid !== null && rid !== undefined) {
            break;
          }
        }
      }
      if (rid === null) {
        return;
      }
      let els = this.$el.getElementsByClassName('t-flow-circle');
      for (let el of els) {
        el.classList.remove('hover');
      }
      let lnk = this.$el.getElementsByClassName('t-flow-circle-' + rid);
      lnk[0].classList.add('hover');
    },
    onRowMouseLeave: function () {
      let els = this.$el.getElementsByClassName('t-flow-circle');
      for (let el of els) {
        el.classList.remove('hover');
      }
    },
    onRowClick: function (e) {
      let rid = e.target.getAttribute('data-rid');
      if (rid === null) {
        let el = e.target;
        for (let i=0; i<10; i++) {
          el = el.parentElement;
          rid = el.getAttribute('data-rid');
          if (rid !== null && rid !== undefined) {
            break;
          }
        }
      }
      this.$router.push({name: 'record', params: {id: this.tid.toString(), vid: this.vid.toString(), gid: this.gid.toString(), rid: rid}});
    }
  },
  mounted() {
    this.fetchOK = false;
    this.fetchFail = false;
    this.trace = null;
    this.service = [];
    this.stage = [];
    fetch(process.env.VUE_APP_API_URL + "/trace/" + this.$route.params.id, {"method": "GET"})
        .then(response => {
          if (response.ok) {
            return response.json()
          } else{
            console.error("Server returned " + response.status + " : " + response.statusText);
          }
        })
        .then(response => {
          const loff = 8;
          const boff = 34.59;
          const coff = 20;

          this.fetchOK = true;
          this.trace = response.payload;
          this.treeWH = {w: 0, h: 0}
          this.tree = [{
            typ: "line",
            x0: 0,
            y0: 0,
            xN: 0,
            yN: boff / 2,
          }];
          this.tmsk = {0: true};
          this.tidx = {0: 0};

          let vid = this.$route.params.vid;
          let gid = this.$route.params.gid;
          for (let i in this.trace.services) {
            let svc = this.trace.services[i];
            if (svc.id === vid || (vid === undefined && i === '0')) {
              if (vid === undefined) {
                vid = svc.id;
                this.vid = vid;
              }
              for (let j in svc.stages) {
                let stg = svc.stages[j];
                this.stage.push({
                  id: stg.id,
                })
                if (stg.id === gid || (gid === undefined && j === '0')) {
                  gid = stg.id;
                  this.gid = gid;
                }
                if (stg.id !== gid) {
                  continue;
                }

                this.treeWH.w = (stg.threads + 2) * loff;
                let bo = boff / 2;
                let to = 0;
                let xo1 = 0;
                for (i in stg.records) {
                  let rec = stg.records[i];
                  let recID = 0;
                  let xoff = 0;
                  let cid = this.tidx[rec.threadID] % coff;
                  if (rec.rows !== undefined) {
                    let first = rec.rows[0];
                    recID = first.id;
                    this.service.push({
                      id: first.id,
                      thid: rec.threadID,
                      chid: 0,
                      text: first.value,
                      lvl: mapLvlTable[first.level],
                      dt: first.dt,
                    });
                    xoff = this.tidx[rec.threadID] * loff;
                  } else if (rec.thread !== undefined) {
                    recID = rec.thread.id;
                    this.service.push({
                      id: rec.thread.id,
                      thid: rec.threadID,
                      chid: rec.childID,
                      thtyp: rec.thread.type,
                      text: rec.thread.type,
                      lvl: mapLvlTable["DEBUG"],
                      dt: rec.thread.dt,
                    });
                    xoff = this.tidx[rec.threadID] * loff;
                    cid = rec.threadID % coff;
                    switch (rec.thread.type) {
                      case 'TH_ACQ':
                        this.tmsk[rec.childID] = true;
                        to++;
                        this.tidx[rec.childID] = to;
                        xo1 = this.tidx[rec.childID] * loff;
                        this.tree.push({
                          typ: "curve",
                          cid: to % coff,
                          x0: 0,
                          y0: bo,
                          xM: 0,
                          yM: bo + boff / 2,
                          xN: xo1,
                          yN: bo + boff / 2,
                          xZ: xo1,
                          yZ: bo + boff,
                        });
                        break;
                      case 'TH_REL':
                        this.tmsk[rec.childID] = false;
                        xoff = this.tidx[rec.childID] * loff;
                        cid = this.tidx[rec.childID] % coff;
                        this.tree.push({
                          typ: "curve",
                          cid: cid,
                          x0: xoff,
                          y0: bo,
                          xM: xoff,
                          yM: bo + boff / 2,
                          xN: 0,
                          yN: bo + boff / 2,
                          xZ: 0,
                          yZ: bo + boff,
                        });
                        break;
                    }
                  }
                  for (let k in this.tmsk) {
                    if (!this.tmsk[k]) {
                      continue;
                    }
                    if (rec.thread !== undefined && parseInt(k) === parseInt(rec.childID)) {
                      continue;
                    }
                    let idx = this.tidx[k];
                    this.tree.push({
                      typ: "line",
                      cid: idx % coff,
                      x0: idx * loff,
                      y0: bo,
                      xN: idx * loff,
                      yN: bo + boff,
                    });
                  }
                  this.tree.push({
                    id: recID,
                    typ: "circle",
                    cid: cid,
                    x: xoff,
                    y: bo,
                  });
                  bo += boff;
                }
                this.treeWH.h = bo + boff / 2;
              }
            }
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
