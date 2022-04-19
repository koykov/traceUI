<template>
  <div>

    <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>

    <div v-if="traceOK">
      <ul class="nav nav-tabs mb-3">
        <li v-for="(svc, i) in trace.services"
            :key="svc.ID"
            class="nav-item">
          <router-link v-if="svc.ID === sid || (sid === undefined && i === 0)"
                       :to="{name: 'service', params: {id: tid, sid: svc.ID}}"
                       class="nav-link active"
                       aria-current="page">{{ svc.ID }}</router-link>
          <router-link v-else
                       :to="{name: 'service', params: {id: tid, sid: svc.ID}}"
                       class="nav-link">{{ svc.ID }}</router-link>
        </li>
      </ul>

      <div class="t-log">
        <div class="t-th-tree">
          <svg :width="treeWH.w" :height="treeWH.h" focusable="false" aria-hidden="true" class="t-flow-container">
            <g transform="translate(8, 54)">
              <rect x="-8" y="8" width="16" height="1000" class="t-flow-rect"></rect>
              <template v-for="(itm, i) in tree">
                <circle :key="i" v-if="itm.typ === 'circle'" :cx="itm.x" :cy="itm.y" r="3" class="css-1e88pln"></circle>
                <path :key="i" v-if="itm.typ === 'line'" :d="`M${itm.x0},${itm.y0} L${itm.xN},${itm.yN}`" class="css-1iinw0h"></path>
                <path :key="i" v-if="itm.typ === 'curve'" :d="`M${itm.x0},${itm.y0} C${itm.xM},${itm.yM} ${itm.xN},${itm.yN} ${itm.xZ},${itm.yZ}`" class="css-1iinw0h"></path>
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
                <tr v-for="rec in service" :key="rec.id">
                  <td class="t-tab-td">
                    <span v-if="rec.thtyp !== undefined && rec.thtyp === 'TH_ACQ'"><ThreadAcqSvg/> Thread #{{ rec.thid }}: acquire child thread #{{ rec.chid }}.</span>
                    <span v-else-if="rec.thtyp !== undefined && rec.thtyp === 'TH_REL'"><ThreadRelSvg/> Thread #{{ rec.thid }}: release child thread #{{ rec.chid }}.</span>
                    <span v-else>{{ rec.text }}</span>
                  </td>
                  <td class="t-tab-td">
                    <time :datetime="rec.dt" :title="rec.dt">{{ rec.dt }}</time>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-warning" role="alert">Trace ID #{{ tid }} not found. Go to <router-link :to="{name: 'home'}">home.</router-link>.</div>

  </div>
</template>

<script>
import ThreadAcqSvg from "@/components/ThreadAcqSvg";
import ThreadRelSvg from "@/components/ThreadRelSvg";

export default {
  name: "ViewTrace",
  components: {ThreadAcqSvg, ThreadRelSvg},
  data() {
    let tid = this.$route.params.id;
    let sid = this.$route.params.sid;

    let bc = [
      {
        text: 'Home',
        to: {name: 'home'},
        active: false
      }
    ];
    if (sid !== undefined && sid.length > 0) {
      bc.push({
        text: tid,
        to: {name: 'trace', params: {id: tid}},
        active: false
      });
      bc.push({
        text: sid,
        to: {name: 'service', params: {id: tid, sid: sid}},
        active: true
      });
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
      sid: this.$route.params.sid,
      traceOK: this.traceOK,
      trace: this.trace,
      service: this.service,

      tree: this.tree,
      treeWH: this.treeWH,
    };
  },
  mounted() {
    this.traceOK = false;
    this.trace = null;
    this.service = [];
    fetch(process.env.VUE_APP_API_URL + "/view/" + this.$route.params.id, {"method": "GET"})
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

          this.traceOK = true;
          this.trace = response.payload;
          this.treeWH = {w: 0, h: 0}
          this.tree = [];
          this.tmsk = {0: true};
          this.tidx = {0: 0};

          let sid = this.$route.params.sid;
          for (let i in this.trace.services) {
            let svc = this.trace.services[i];
            if (svc.ID === sid || (sid === undefined && i === '0')) {
              this.treeWH.w = (svc.threads + 2) * loff;
              let bo = 0;
              let to = 0;
              let xo1 = 0;
              for (i in svc.records) {
                let rec = svc.records[i];
                let xoff = 0;
                if (rec.rows !== undefined) {
                  this.service.push({
                    id: rec.rows[0].id,
                    thid: rec.threadID,
                    chid: 0,
                    text: rec.rows[0].value,
                    dt: rec.rows[0].dt,
                  });
                  xoff = this.tidx[rec.threadID] * loff;
                } else if (rec.thread !== undefined) {
                  this.service.push({
                    id: rec.thread.id,
                    thid: rec.threadID,
                    chid: rec.childID,
                    thtyp: rec.thread.type,
                    text: rec.thread.type,
                    dt: rec.thread.dt,
                  });
                  xoff = this.tidx[rec.threadID] * loff;
                  switch (rec.thread.type) {
                    case 'TH_ACQ':
                      this.tmsk[rec.childID] = true;
                      to++;
                      this.tidx[rec.childID] = to;
                      xo1 = this.tidx[rec.childID] * loff;
                      this.tree.push({
                        typ: "curve",
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
                      this.tree.push({
                        typ: "curve",
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
                this.tree.push({
                  typ: "circle",
                  x: xoff,
                  y: bo,
                });
                for (i in this.tmsk) {
                  if (!this.tmsk[i]) {
                    continue;
                  }
                  if (rec.thread !== undefined && parseInt(i) === parseInt(rec.childID)) {
                    continue;
                  }
                  let idx = this.tidx[i]
                  this.tree.push({
                    typ: "line",
                    x0: idx * loff,
                    y0: bo,
                    xN: idx * loff,
                    yN: bo + boff,
                  });
                }
                bo += boff;
                // console.log(rec.id, ls, this.tmsk);
              }
              this.treeWH.h = bo + boff;
              console.log(this.tidx);
              console.log(this.tree);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
  }
}
</script>

<style>
svg:not(:root) {
  overflow: hidden;
}
.t-log {
  display: flex;
  position: relative;
  min-height: 100px;
  margin-bottom: 32px;
}
.t-th-tree {
  box-sizing: border-box;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
}
.t-flow-rect {
  stroke: transparent;
  fill: transparent;
}
.css-1iinw0h {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(54, 179, 126);
}
.css-1e88pln {
  r: 3;
  cursor: pointer;
  transition: r 0.3s ease-out 0s;
  stroke-width: 4px;
  stroke: transparent;
  fill: rgb(54, 179, 126);
}
.css-1e88pln:hover, .css-1e88pln:focus {
  r: 5;
  fill: rgb(255, 255, 255);
  stroke: rgb(54, 179, 126);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-84yyhk {
  r: 3;
  cursor: pointer;
  transition: r 0.3s ease-out 0s;
  stroke-width: 4px;
  stroke: transparent;
  fill: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-1ylas8d {
  r: 3;
  cursor: pointer;
  transition: r 0.3s ease-out 0s;
  stroke-width: 4px;
  stroke: transparent;
  fill: rgb(0, 101, 255);
}
.css-jdft62 {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 184, 217);
}
.css-jdft62 {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 184, 217);
}
.css-1t617le {
  r: 3;
  cursor: pointer;
  transition: r 0.3s ease-out 0s;
  stroke-width: 4px;
  stroke: transparent;
  fill: rgb(0, 184, 217);
}
.css-10310f2 {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 171, 0);
}
.css-bakhhg {
  r: 3;
  cursor: pointer;
  transition: r 0.3s ease-out 0s;
  stroke-width: 4px;
  stroke: transparent;
  fill: rgb(255, 171, 0);
}

/* --- */
.t-tab-container {
  position: relative;
  width: 100%;
}
.t-tab-flex {
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.t-tab-row {
  position: relative;
  width: 100%;
}

table {
  border-collapse: collapse;
  width: 100%;
}
tbody, tfoot, thead {
  border-bottom: 2px solid #dfe1e6;
}
tbody, tfoot, thead {
  border-bottom: 2px solid #dfe1e6;
}
blockquote:first-child, dl:first-child, form:first-child, h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child, ol:first-child, p:first-child, pre:first-child, table:first-child, ul:first-child {
  margin-top: 0;
}

.t-tab {
  table-layout: fixed;
  width: 100%;
  pointer-events: auto;
  margin-top: 0;
}
.t-tab-h {
  color: rgb(94, 108, 132);
  vertical-align: middle;
  text-align: initial;
  padding: 4px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.t-tab-td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  text-align: initial;
  max-width: 0;
}
</style>
