// angular.module('content',[])
// .coontroller('cont1',['$scope',function(){
	
// }]);
function writingMode(story,show){
  var s = document.getElementById(show);
  var a = story.slice("");
  var i = 0;
  timer=setInterval(function(){
    s.innerHTML=story.substring(0,i)
    i++;
    if(s.innerHTML==story.innerHTML){clearInterval(timer);};
  },100);
}