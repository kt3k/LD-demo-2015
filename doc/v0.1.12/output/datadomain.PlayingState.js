Ext.data.JsonP.datadomain_PlayingState({"tagname":"class","name":"datadomain.PlayingState","autodetected":{},"files":[{"filename":"PlayingState.js","href":"PlayingState.html#datadomain-PlayingState"}],"members":[{"name":"constructor","tagname":"method","owner":"datadomain.PlayingState","id":"method-constructor","meta":{}},{"name":"add","tagname":"method","owner":"datadomain.PlayingState","id":"method-add","meta":{}},{"name":"bump","tagname":"method","owner":"datadomain.PlayingState","id":"method-bump","meta":{}},{"name":"createFromObject","tagname":"method","owner":"datadomain.PlayingState","id":"method-createFromObject","meta":{}},{"name":"createInitialState","tagname":"method","owner":"datadomain.PlayingState","id":"method-createInitialState","meta":{}},{"name":"release","tagname":"method","owner":"datadomain.PlayingState","id":"method-release","meta":{}},{"name":"restore","tagname":"method","owner":"datadomain.PlayingState","id":"method-restore","meta":{}},{"name":"save","tagname":"method","owner":"datadomain.PlayingState","id":"method-save","meta":{}},{"name":"toObject","tagname":"method","owner":"datadomain.PlayingState","id":"method-toObject","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-datadomain.PlayingState","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/PlayingState.html#datadomain-PlayingState' target='_blank'>PlayingState.js</a></div></pre><div class='doc-contents'><p>PlayingState model represents the current playing state of the level.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='datadomain.PlayingState'>datadomain.PlayingState</span><br/><a href='source/PlayingState.html#datadomain-PlayingState-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/datadomain.PlayingState-method-constructor' class='name expandable'>datadomain.PlayingState</a>( <span class='pre'>name, [rounds]</span> ) : <a href=\"#!/api/datadomain.PlayingState\" rel=\"datadomain.PlayingState\" class=\"docClass\">datadomain.PlayingState</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the character</p>\n</div></li><li><span class='pre'>rounds</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>The directions</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/datadomain.PlayingState\" rel=\"datadomain.PlayingState\" class=\"docClass\">datadomain.PlayingState</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='datadomain.PlayingState'>datadomain.PlayingState</span><br/><a href='source/PlayingState.html#datadomain-PlayingState-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/datadomain.PlayingState-method-add' class='name expandable'>add</a>( <span class='pre'>dir</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a direction ...</div><div class='long'><p>Adds a direction</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dir</span> : String<div class='sub-desc'><p>The direction</p>\n</div></li></ul></div></div></div><div id='method-bump' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='datadomain.PlayingState'>datadomain.PlayingState</span><br/><a href='source/PlayingState.html#datadomain-PlayingState-method-bump' target='_blank' class='view-source'>view source</a></div><a href='#!/api/datadomain.PlayingState-method-bump' class='name expandable'>bump</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Moves to the next round. ...</div><div class='long'><p>Moves to the next round.</p>\n</div></div></div><div id='method-createFromObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='datadomain.PlayingState'>datadomain.PlayingState</span><br/><a href='source/PlayingState.html#datadomain-PlayingState-method-createFromObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/datadomain.PlayingState-method-createFromObject' class='name expandable'>createFromObject</a>( <span class='pre'>name, obj</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates instance from the object. ...</div><div class='long'><p>Creates instance from the object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the character</p>\n</div></li><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>The source object</p>\n<ul><li><span class='pre'>dirs</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The list of directions</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-createInitialState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='datadomain.PlayingState'>datadomain.PlayingState</span><br/><a href='source/PlayingState.html#datadomain-PlayingState-method-createInitialState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/datadomain.PlayingState-method-createInitialState' class='name expandable'>createInitialState</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/datadomain.PlayingState\" rel=\"datadomain.PlayingState\" class=\"docClass\">datadomain.PlayingState</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates initial state of the playing data. ...</div><div class='long'><p>Creates initial state of the playing data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the character</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/datadomain.PlayingState\" rel=\"datadomain.PlayingState\" class=\"docClass\">datadomain.PlayingState</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-release' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='datadomain.PlayingState'>datadomain.PlayingState</span><br/><a href='source/PlayingState.html#datadomain-PlayingState-method-release' target='_blank' class='view-source'>view source</a></div><a href='#!/api/datadomain.PlayingState-method-release' class='name expandable'>release</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Releases the round data and init the obj state. ...</div><div class='long'><p>Releases the round data and init the obj state.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>The array of round data</p>\n</div></li></ul></div></div></div><div id='method-restore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='datadomain.PlayingState'>datadomain.PlayingState</span><br/><a href='source/PlayingState.html#datadomain-PlayingState-method-restore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/datadomain.PlayingState-method-restore' class='name expandable'>restore</a>( <span class='pre'></span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Restores from the saved object. ...</div><div class='long'><p>Restores from the saved object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='datadomain.PlayingState'>datadomain.PlayingState</span><br/><a href='source/PlayingState.html#datadomain-PlayingState-method-save' target='_blank' class='view-source'>view source</a></div><a href='#!/api/datadomain.PlayingState-method-save' class='name expandable'>save</a>( <span class='pre'></span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Saves the current state. ...</div><div class='long'><p>Saves the current state.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='datadomain.PlayingState'>datadomain.PlayingState</span><br/><a href='source/PlayingState.html#datadomain-PlayingState-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/datadomain.PlayingState-method-toObject' class='name expandable'>toObject</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets object representation ...</div><div class='long'><p>Gets object representation</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});