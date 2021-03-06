ace.define("ace/theme/kr_theme",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-kr-theme",t.cssText=".ace-kr-theme .ace_gutter {\nbackground: #1c1917;\ncolor: #FCFFE0\n}\n.ace-kr-theme .ace_print-margin {\nwidth: 1px;\nbackground: #1c1917\n}\n.ace-kr-theme .ace_scroller {\nbackground-color: #0B0A09\n}\n.ace-kr-theme .ace_text-layer {\ncolor: #FCFFE0\n}\n.ace-kr-theme .ace_cursor {\nborder-left: 2px solid #FF9900\n}\n.ace-kr-theme .ace_overwrite-cursors .ace_cursor {\nborder-left: 0px;\nborder-bottom: 1px solid #FF9900\n}\n.ace-kr-theme .ace_marker-layer .ace_selection {\nbackground: rgba(170, 0, 255, 0.45)\n}\n.ace-kr-theme.ace_multiselect .ace_selection.ace_start {\nbox-shadow: 0 0 3px 0px #0B0A09;\nborder-radius: 2px\n}\n.ace-kr-theme .ace_marker-layer .ace_step {\nbackground: rgb(102, 82, 0)\n}\n.ace-kr-theme .ace_marker-layer .ace_bracket {\nmargin: -1px 0 0 -1px;\nborder: 1px solid rgba(255, 177, 111, 0.32)\n}\n.ace-kr-theme .ace_marker-layer .ace_active-line {\nbackground: #38403D\n}\n.ace-kr-theme .ace_gutter-active-line {\nbackground-color : #38403D\n}\n.ace-kr-theme .ace_marker-layer .ace_selected-word {\nborder: 1px solid rgba(170, 0, 255, 0.45)\n}\n.ace-kr-theme .ace_invisible {\ncolor: rgba(255, 177, 111, 0.32)\n}\n.ace-kr-theme .ace_keyword,\n.ace-kr-theme .ace_meta {\ncolor: #949C8B\n}\n.ace-kr-theme .ace_constant,\n.ace-kr-theme .ace_constant.ace_character,\n.ace-kr-theme .ace_constant.ace_character.ace_escape,\n.ace-kr-theme .ace_constant.ace_other {\ncolor: rgba(210, 117, 24, 0.76)\n}\n.ace-kr-theme .ace_invalid {\ncolor: #F8F8F8;\nbackground-color: #A41300\n}\n.ace-kr-theme .ace_support {\ncolor: #9FC28A\n}\n.ace-kr-theme .ace_support.ace_constant {\ncolor: #C27E66\n}\n.ace-kr-theme .ace_fold {\nbackground-color: #949C8B;\nborder-color: #FCFFE0\n}\n.ace-kr-theme .ace_support.ace_function {\ncolor: #85873A\n}\n.ace-kr-theme .ace_storage {\ncolor: #FFEE80\n}\n.ace-kr-theme .ace_string {\ncolor: rgba(164, 161, 181, 0.8)\n}\n.ace-kr-theme .ace_string.ace_regexp {\ncolor: rgba(125, 255, 192, 0.65)\n}\n.ace-kr-theme .ace_comment {\nfont-style: italic;\ncolor: #706D5B\n}\n.ace-kr-theme .ace_variable {\ncolor: #D1A796\n}\n.ace-kr-theme .ace_variable.ace_language {\ncolor: #FF80E1\n}\n.ace-kr-theme .ace_meta.ace_tag {\ncolor: #BABD9C\n}\n.ace-kr-theme .ace_markup.ace_underline {\ntext-decoration: underline\n}\n.ace-kr-theme .ace_markup.ace_list {\nbackground-color: #0F0040\n}\n.ace-kr-theme .ace_indent-guide {\nbackground: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPg5uL8zzBz5sz/AA1WA+hUYIqjAAAAAElFTkSuQmCC) right repeat-y\n}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})