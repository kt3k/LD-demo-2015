scene.map.MapScene=function(t){"use strict";var o=function(){this.floor=new domain.map.Floor,this.wall=new domain.map.Wall,this.wall.loadFromObjectList(window.woList),this.ma=new domain.common.Ma,this.ma.setParent(this.wall.$dom),this.cls=new domain.map.CharLocateService(this.wall,this.ma),this.wall.setCharLocateService(this.cls),this.menuButton=t(".menu-button").menuButton(t("#map-menu")),this.lifeButton={}},e=o.prototype=new scene.common.Scene;return e.start=function(){var t=this;return t.menuButton.show(),ui.common.BackgroundService.turnWhite().then(function(){return t.floor.appear()}).then(function(){return t.wall.appear()}).then(function(){return t.cls.charAppear()})},e.fadeOut=function(){this.menuButton.hide();var t=this;return this.wall.disappear().then(function(){return t.floor.disappear()}).then(function(){return ui.common.BackgroundService.turnBlack()})},e.goToLevel=function(t){var o=this;return this.cls.getIntoDoor().then(function(){return o.fadeOut()}).then(function(){location.href="level.html#"+t})},o}(window.jQuery),domain.map.WallObject=function(t){"use strict";var o=function(){},e=o.prototype;return e.setParent=function(t){return this.parent=t,this},e.setPos=function(t){return this.x=t[0],this.y=t[1],this},e.rightLimit=function(){return this.x+this.w},e.centerX=function(){return this.x+this.w/2},e.centerY=function(){return this.y+this.h},e.setSize=function(t){return this.w=t[0],this.h=t[1],this},e.setCharLocateService=function(t){return this.cls=t,this},e.createDom=function(){return t("<div />").css({backgroundColor:"black",opcaity:0})},e.appear=function(){return this.$dom=this.$dom||this.createDom().width(this.w).height(this.h).offset({left:this.x,top:this.y}).appendTo(this.parent),this.$dom.anim(this.appearAnim,this.appearDur)},e.disappear=function(){var t=this;return this.$dom.anim(this.disappearAnim,this.disappearDur).then(function(){t.$dom.remove()})},e.open=function(){},e.close=function(){},o}(window.jQuery),domain.map.CharLocateService=function(){"use strict";var t=function(t,o){this.wall=t,this.chr=o,this.charPosRepo=new datadomain.CharPositionRepository},o=t.prototype;return o.charAppear=function(){var t=this.wall.findDoorByLevel(this.position.level);this.current=t;var o=this.chr,e=t.centerX(),n=t.centerY();return o.x=e,o.y=n,t.open().then(function(){o.appear()})},o.moveToDoorByLevel=function(t){return this.moveToDoor(this.wall.findDoorByLevel(t))},o.moveToDoor=function(t){var o=this,e=this.wall.findDoorByLevel(this.position.level);this.position.level=t.level,this.charPosRepo.setCharPosition(this.chr.name,this.position);var n=400,i=1e3,r=400,s=80;return this.wall.visible(this.chr)||this.wall.scrollSet(e.centerX()),e.close(),this.chr.moveTo("y",this.wall.groundLevel+s,n).then(function(){return o.wall.scrollTo(t.centerX(),i),t.open(),o.chr.moveTo("x",t.centerX(),i)}).then(function(){return o.chr.moveTo("y",t.centerY(),r)}).then(function(){return o.current=t,o.chr.turn("down")})},o.getIntoDoor=function(){var t=this;return this.chr.turn("up"),this.chr.disappear().then(function(){return t.current.close()})},o.load=function(){var t=this;return this.charPosRepo.getCharPosition(this.chr.name).then(function(o){return t.position=o,t})},t}(),domain.map.Door=function(t){"use strict";var o=400,e=function(t,o,e,n){this.name=t,this.level=o,this.star=e,this.score=n};e.createFromObject=function(t){return new e(t.name,t.level,t.star,t.score).setPos(t.pos).setSize(t.size)};var n=e.prototype=new domain.map.WallObject;return n.createDom=function(){var o=this;return this.$doorFrame=t("<div />").addClass("door-frame").css("opcaity",0),this.$door=t("<div />").addClass("door").appendTo(this.$doorFrame),this.$door.click(function(){o.cls.moveToDoorByLevel(o.level)}),t("<div />").addClass("door-front").text(this.name).appendTo(this.$door),t("<div />").addClass("doorknob").text("\u25cf").appendTo(this.$door),this.infoPane=t('<div><div class="door-info-content"><p>'+this.name+"</p><hr /><p><small>\u265b Best \u265b</small><br />"+this.score+"</p><hr /></div></div>").addClass("door-info").css({width:"150px",height:"150px",top:"-200px",left:"-40px"}).appendTo(this.$doorFrame).infoPane(3,5,{bgcolor:"#393F44"}),t("<button />").text("\u25b6").appendTo(t(".door-info-content",this.infoPane.$dom)).click(function(t){t.preventDefault(),window.ms.goToLevel(o.level)}),this.$doorFrame},n.open=function(){return this.infoPane.show(),this.$door.addClass("open"),wait(this.doorActionDur)},n.close=function(){return this.infoPane.hide(),this.$door.removeClass("open"),wait(this.doorActionDur)},n.doorActionDur=400,n.appearAnim="door-appear",n.appearDur=o,n.disappearAnim="door-disappear",n.disappearDur=o,e}(window.jQuery),domain.map.Floor=function(t){"use strict";var o=400,e=function(){this.$dom=t(".floor")};e.HEIGHT_RATE=.35;var n=e.prototype;return n.appear=function(){return this.$dom.removeClass("floor-hidden"),this.$dom.anim("floor-appear",o)},n.disappear=function(){var t=this;return t.$dom.addClass("floor-hidden"),this.$dom.anim("floor-disappear",o).then(function(){})},e}(window.jQuery);var h=100,w=70;window.woList=[{type:"l",name:"701",level:"701",pos:[100,-h],size:[w,h],star:3,score:5e3},{type:"l",name:"702",level:"702",pos:[300,-h],size:[w,h],star:3,score:5e3},{type:"l",name:"703",level:"703",pos:[500,-h],size:[w,h],star:3,score:5e3},{type:"l",name:"704",level:"704",pos:[700,-h],size:[w,h],star:3,score:5e3}],domain.map.Wall=function(t){"use strict";var o=function(){this.wos=[],this.groundLevel=t(window).height()*(1-domain.map.Floor.HEIGHT_RATE),this.wallWidth=t(window).width(),this.$dom=t(".floor-wrapper")},e=o.prototype;return e.loadFromObjectList=function(t){var o=this;this.wos=t.map(function(t){return o.transformCoordinates(t),domain.map.Door.createFromObject(t).setParent(o.$dom)}),this.expandRightLimit(100)},e.transformCoordinates=function(t){t.pos[1]+=this.groundLevel},e.expandRightLimit=function(o){var e=this.rightLimit()+o;t("<div />").appendTo(this.$dom).css({width:"1px",height:"1px",position:"absolute"}).offset({left:e,top:this.groundLevel})},e.rightLimit=function(){return Math.max.apply(Math,this.wos.map(function(t){return t.rightLimit()}))},e.appear=function(){var t=this,o=this.cls.load().then(function(o){t.scrollSetToDoor(o.position.level)});return this.wos.forEach(function(t){o=o.then(function(){return t.appear(),wait(100)})}),o},e.disappear=function(){var t=Promise.resolve();return this.wos.forEach(function(o){console.log(o),t=t.then(function(){return o.disappear(),wait(100)})}),t},e.scrollSetToDoor=function(t){var o=this.findDoorByLevel(t);return null==o&&console.error("door not found (level = "+t+")"),this.scrollSet(o.centerX())},e.scrollSet=function(t){return this.$dom.scrollLeft(t-this.wallWidth/2),this},e.scroll=function(t,o){return this.$dom.animate({scrollLeft:this.$dom.scrollLeft()+t},o),wait(o)},e.scrollTo=function(t,o){return this.$dom.animate({scrollLeft:t-this.wallWidth/2},o),wait(o)},e.setCharLocateService=function(t){return this.cls=t,this.wos.forEach(function(o){o.setCharLocateService(t)}),this},e.visible=function(t){return t.rightLimit()>this.$dom.scrollLeft()&&t.leftLimit()<this.$dom.scrollLeft()+this.wallWidth},e.findDoorByLevel=function(t){return this.wos.filter(function(o){return o.level===t})[0]},o}(window.jQuery);