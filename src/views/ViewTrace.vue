<template>
  <div>
    {{ tid }}

    <div data-qa="commit-list-container" class="t-log">
      <div class="t-th-tree">
        <svg width="48" height="1040" focusable="false" aria-hidden="true" class="t-flow-container">
          <g transform="translate(8, 48)">
            <rect x="-8" y="8" width="16" height="1000" class="t-flow-rect"></rect>
            <path d="M0,0 L0,40" class="css-1iinw0h"></path>
            <circle cx="0" cy="0" r="3" class="css-1e88pln"></circle>
            <path d="M0,40 L0,80" class="css-1iinw0h"></path>
            <path d="M0,40 C0,60 8,60 8,80" class="css-dok1lu"></path>
            <circle cx="0" cy="40" r="3" class="css-1e88pln"></circle>
            <path d="M0,80 L0,120" class="css-1iinw0h"></path>
            <path d="M8,80 L8,120" class="css-dok1lu"></path>
            <circle cx="8" cy="80" r="3" class="css-84yyhk"></circle>
            <path d="M0,120 L0,160" class="css-1iinw0h"></path>
            <path d="M8,120 L8,160" class="css-dok1lu"></path>
            <path d="M8,120 C8,140 0,140 0,160" class="css-1iinw0h"></path>
            <circle cx="8" cy="120" r="3" class="css-84yyhk"></circle>
            <path d="M0,160 L0,200" class="css-1iinw0h"></path>
            <path d="M0,160 C0,180 8,180 8,200" class="css-dok1lu"></path>
            <path d="M8,160 L8,200" class="css-dok1lu"></path>
            <circle cx="0" cy="160" r="3" class="css-1e88pln"></circle>
            <path d="M0,200 L0,240" class="css-1iinw0h"></path>
            <path d="M8,200 L8,240" class="css-dok1lu"></path>
            <circle cx="8" cy="200" r="3" class="css-84yyhk"></circle>
            <path d="M0,240 L0,280" class="css-1iinw0h"></path>
            <path d="M8,240 L8,280" class="css-dok1lu"></path>
            <path d="M8,240 C8,260 0,260 0,280" class="css-1iinw0h"></path>
            <circle cx="8" cy="240" r="3" class="css-84yyhk"></circle>
            <path d="M0,280 L0,320" class="css-1iinw0h"></path>
            <path d="M8,280 L8,320" class="css-dok1lu"></path>
            <path d="M16,280 L16,320" class="css-1rs47pa"></path>
            <circle cx="16" cy="280" r="3" class="css-1ylas8d"></circle>
            <path d="M0,320 L0,360" class="css-1iinw0h"></path>
            <path d="M0,320 C0,340 16,340 16,360" class="css-1rs47pa"></path>
            <path d="M8,320 L8,360" class="css-dok1lu"></path>
            <path d="M16,320 L16,360" class="css-1rs47pa"></path>
            <circle cx="0" cy="320" r="3" class="css-1e88pln"></circle>
            <path d="M0,360 L0,400" class="css-1iinw0h"></path>
            <path d="M8,360 L8,400" class="css-dok1lu"></path>
            <path d="M16,360 L16,400" class="css-1rs47pa"></path>
            <circle cx="16" cy="360" r="3" class="css-1ylas8d"></circle>
            <path d="M0,400 L0,440" class="css-1iinw0h"></path>
            <path d="M8,400 L8,440" class="css-dok1lu"></path>
            <path d="M16,400 L16,440" class="css-1rs47pa"></path>
            <circle cx="16" cy="400" r="3" class="css-1ylas8d"></circle>
            <path d="M0,440 L0,480" class="css-1iinw0h"></path>
            <path d="M8,440 L8,480" class="css-dok1lu"></path>
            <path d="M16,440 L16,480" class="css-1rs47pa"></path>
            <circle cx="16" cy="440" r="3" class="css-1ylas8d"></circle>
            <path d="M0,480 L0,520" class="css-1iinw0h"></path>
            <path d="M8,480 L8,520" class="css-dok1lu"></path>
            <path d="M16,480 L16,520" class="css-1rs47pa"></path>
            <circle cx="16" cy="480" r="3" class="css-1ylas8d"></circle>
            <path d="M0,520 L0,560" class="css-1iinw0h"></path>
            <path d="M8,520 L8,560" class="css-dok1lu"></path>
            <path d="M16,520 L16,560" class="css-1rs47pa"></path>
            <path d="M16,520 C16,540 0,540 0,560" class="css-1iinw0h"></path>
            <circle cx="16" cy="520" r="3" class="css-1ylas8d"></circle>
            <path d="M0,560 L0,600" class="css-1iinw0h"></path>
            <path d="M0,560 C0,580 8,580 8,600" class="css-jdft62"></path>
            <path d="M8,560 C8,580 16,580 16,600" class="css-dok1lu"></path>
            <path d="M16,560 C16,580 24,580 24,600" class="css-1rs47pa"></path>
            <circle cx="0" cy="560" r="3" class="css-1e88pln"></circle>
            <path d="M0,600 L0,640" class="css-1iinw0h"></path>
            <path d="M8,600 L8,640" class="css-jdft62"></path>
            <path d="M16,600 L16,640" class="css-dok1lu"></path>
            <path d="M24,600 L24,640" class="css-1rs47pa"></path>
            <circle cx="8" cy="600" r="3" class="css-1t617le"></circle>
            <path d="M0,640 L0,680" class="css-1iinw0h"></path>
            <path d="M0,640 C0,660 8,660 8,680" class="css-jdft62"></path>
            <path d="M8,640 L8,680" class="css-jdft62"></path>
            <path d="M16,640 L16,680" class="css-dok1lu"></path>
            <path d="M24,640 L24,680" class="css-1rs47pa"></path>
            <circle cx="0" cy="640" r="3" class="css-1e88pln"></circle>
            <path d="M0,680 L0,720" class="css-1iinw0h"></path>
            <path d="M8,680 C8,700 0,700 0,720" class="css-1iinw0h"></path>
            <path d="M16,680 C16,700 8,700 8,720" class="css-dok1lu"></path>
            <path d="M24,680 C24,700 16,700 16,720" class="css-1rs47pa"></path>
            <circle cx="8" cy="680" r="3" class="css-1t617le"></circle>
            <path d="M0,720 L0,760" class="css-1iinw0h"></path>
            <path d="M0,720 C0,740 16,740 16,760" class="css-1rs47pa"></path>
            <path d="M8,720 L8,760" class="css-dok1lu"></path>
            <path d="M16,720 L16,760" class="css-1rs47pa"></path>
            <circle cx="0" cy="720" r="3" class="css-1e88pln"></circle>
            <path d="M0,760 L0,800" class="css-1iinw0h"></path>
            <path d="M8,760 L8,800" class="css-dok1lu"></path>
            <path d="M16,760 L16,800" class="css-1rs47pa"></path>
            <circle cx="16" cy="760" r="3" class="css-1ylas8d"></circle>
            <path d="M0,800 L0,840" class="css-1iinw0h"></path>
            <path d="M0,800 C0,820 8,820 8,840" class="css-10310f2"></path>
            <path d="M8,800 C8,820 16,820 16,840" class="css-dok1lu"></path>
            <path d="M16,800 C16,820 24,820 24,840" class="css-1rs47pa"></path>
            <circle cx="0" cy="800" r="3" class="css-1e88pln"></circle>
            <path d="M0,840 L0,880" class="css-1iinw0h"></path>
            <path d="M8,840 C8,860 0,860 0,880" class="css-1iinw0h"></path>
            <path d="M16,840 C16,860 8,860 8,880" class="css-dok1lu"></path>
            <path d="M24,840 C24,860 16,860 16,880" class="css-1rs47pa"></path>
            <circle cx="8" cy="840" r="3" class="css-bakhhg"></circle>
            <path d="M0,880 L0,920" class="css-1iinw0h"></path>
            <path d="M0,880 C0,900 16,900 16,920" class="css-1rs47pa"></path>
            <path d="M8,880 L8,920" class="css-dok1lu"></path>
            <path d="M16,880 L16,920" class="css-1rs47pa"></path>
            <circle cx="0" cy="880" r="3" class="css-1e88pln"></circle>
            <path d="M0,920 L0,960" class="css-1iinw0h"></path>
            <path d="M8,920 L8,960" class="css-dok1lu"></path>
            <path d="M16,920 L16,960" class="css-1rs47pa"></path>
            <circle cx="16" cy="920" r="3" class="css-1ylas8d"></circle>
            <path d="M0,960 L0,1000" class="css-1iinw0h"></path>
            <path d="M8,960 L8,1000" class="css-dok1lu"></path>
            <path d="M16,960 L16,1000" class="css-1rs47pa"></path>
            <circle cx="16" cy="960" r="3" class="css-1ylas8d"></circle>
          </g>
        </svg>
      </div>
      <div class="t-tab-container">
        <div class="t-tab-flex">
          <div class="t-tab-row">
            <table class="t-tab">
              <thead>
              <tr>
                <th class="t-tab-h">Message</th>
                <th class="t-tab-h">Datetime</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  <ThreadAcqSvg/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  <ThreadRelSvg/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              <tr>
                <td class="t-tab-td">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra mollis tortor ac placerat. In interdum lobortis dui at volutpat.
                </td>
                <td class="t-tab-td">
                  <time datetime="2021-12-28 03:42:24.683672" title="December 28, 2021, 3:16:33 PM GMT+2">2021-12-28 03:42:24.683672</time>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ThreadAcqSvg from "@/components/ThreadAcqSvg";
import ThreadRelSvg from "@/components/ThreadRelSvg";

export default {
  name: "ViewTrace",
  components: {ThreadAcqSvg, ThreadRelSvg},
  data() {
    return {
      tid: this.$route.params.id
    };
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
  padding-right: 16px;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
}
.t-flow-container {
  /*transform: scaleX(-1);*/
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
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
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
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-jdft62 {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 184, 217);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-jdft62 {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 184, 217);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-1t617le {
  r: 3;
  cursor: pointer;
  transition: r 0.3s ease-out 0s;
  stroke-width: 4px;
  stroke: transparent;
  fill: rgb(0, 184, 217);
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
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-10310f2 {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 171, 0);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-bakhhg {
  r: 3;
  cursor: pointer;
  transition: r 0.3s ease-out 0s;
  stroke-width: 4px;
  stroke: transparent;
  fill: rgb(255, 171, 0);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
}
.css-dok1lu {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(255, 86, 48);
}
.css-1rs47pa {
  fill: none;
  stroke-width: 1px;
  stroke: rgb(0, 101, 255);
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
td:first-child, th:first-child {
  padding-left: 0;
}
td:last-child, th:last-child {
  padding-right: 0;
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
  margin-top: 0px;
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
.t-tab-h:first-of-type {
  padding-left: 0px;
}
.css-8m4tnv {
  color: rgb(94, 108, 132);
  vertical-align: middle;
  text-align: initial;
  padding: 4px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: none;
}
.t-tab-td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 40px;
  box-sizing: border-box;
  text-align: initial;
  max-width: 0px;
}
.t-tab-td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 40px;
  box-sizing: border-box;
  text-align: initial;
  max-width: 0px;
}
.css-70qvj9 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.t-tab-td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 40px;
  box-sizing: border-box;
  text-align: initial;
  max-width: 0px;
}
.css-1v0cd8t {
  line-height: 1;
}
.css-1db129j {
  height: 24px;
  width: 24px;
  -webkit-box-align: stretch;
  align-items: stretch;
  background-color: var(--background-overlay,#FFFFFF);
  border-radius: 50%;
  box-sizing: content-box;
  cursor: inherit;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  overflow: hidden;
  position: static;
  transform: translateZ(0px);
  transition: transform 200ms ease 0s, opacity 200ms ease 0s;
  box-shadow: 0 0 0 2px var(--background-overlay,#FFFFFF);
  border: none;
  margin: 2px;
  padding: 0px;
  font-size: inherit;
  font-family: inherit;
}
.css-ob4lje {
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1 1 100%;
  background-color: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.css-1db129j::after {
  background-color: transparent;
  inset: 0px;
  border-radius: 50%;
  content: " ";
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transition: opacity 200ms ease 0s;
  width: 100%;
}
.css-2d54z7 {
  margin-left: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.css-gg4vpm {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-1385fg2 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
}
.css-1e020ok {
  cursor: default;
  padding-left: 4px;
}
.css-mktid {
  background-color: var(--ds-background-subtleNeutral-resting,#DFE1E6);
  color: var(--ds-text-highEmphasis,#42526E);
  display: inline-block;
  box-sizing: border-box;
  max-width: 100%;
  padding: 2px 0px 3px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  vertical-align: baseline;
}
.css-1wsum1f {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  padding: 0px 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  white-space: nowrap;
}
.css-c7g021 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-flex: 1;
  flex-grow: 1;
  line-height: 2;
  padding-left: 4px;
}

</style>
