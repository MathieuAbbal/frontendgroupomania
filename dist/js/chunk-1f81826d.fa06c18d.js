(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f81826d"],{"4ea3":function(e,t,s){"use strict";var n=s("7a23"),o={key:0,class:"text-sm font-bold text-gray-500"},r={class:""},c={class:"w-full pb-4 "},a={class:"bg-gray-100 rounded-xl mr-2"},i={class:"text-sm p-2 m-2 text-left"},l={class:" text-xs "},u={class:"font-semibold flex justify-end text-gray-700 px-2 "},d={class:"pt-2 mr-2 text-red-400"},b={class:"pt-2"};function p(e,t,s,p,m,g){return Object(n["p"])(),Object(n["d"])("div",null,[m.comments.length>0?(Object(n["p"])(),Object(n["d"])("h2",o,"Commentaires :")):Object(n["e"])("",!0),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(m.comments,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"flex space-x-2",key:e.id},[Object(n["g"])("div",r,[Object(n["g"])("img",{class:"w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow",src:e.User.avatar,alt:""},null,8,["src"])]),Object(n["g"])("div",c,[Object(n["g"])("div",a,[Object(n["g"])("div",i,Object(n["w"])(e.content),1),Object(n["g"])("div",l,[Object(n["g"])("div",u,[Object(n["g"])("small",d,Object(n["w"])(e.User.firstname),1),Object(n["g"])("small",b,"le "+Object(n["w"])(g.dateFormat(e.createdAt)),1)])])])])])})),128))])}var m=s("bc3a"),g=s.n(m),j={names:"Comments",props:{user:{type:Object},post:{type:Object}},data:function(){return{comments:[],user_id:JSON.parse(sessionStorage.user).user_id,isAdmin:JSON.parse(sessionStorage.user).isAdmin}},created:function(){this.getAllComments()},methods:{getAllComments:function(){var e=this,t=JSON.stringify(this.post.id);g.a.get("https://backendgroupomania.herokuapp.com/api/posts/".concat(t,"/comments"),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(sessionStorage.user).token}}).then((function(t){e.comments=t.data,console.log(t.data)}))},dateFormat:function(e){var t=new Date(e),s={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return t.toLocaleDateString("fr-FR",s)}}};j.render=p;t["a"]=j},b84e:function(e,t,s){"use strict";s.r(t);var n=s("7a23");function o(e,t,s,o,r,c){var a=Object(n["u"])("LoginForm"),i=Object(n["u"])("Header"),l=Object(n["u"])("PostsByUserId");return Object(n["p"])(),Object(n["d"])("div",null,[r.connected?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])(a,{key:0})),r.connected?(Object(n["p"])(),Object(n["d"])(i,{key:1})):Object(n["e"])("",!0),r.connected?(Object(n["p"])(),Object(n["d"])(l,{key:2})):Object(n["e"])("",!0)])}var r=s("61b1"),c=s("0418"),a={key:0},i=Object(n["g"])("h1",{class:"p-4 m-2 font-bold text-2xl text-gray-800"},"Il n'y a pas de publication chez cet utilisateur pour le moment ! ",-1),l={key:1,class:"p-4 font-bold text-2xl text-gray-800"},u=Object(n["g"])("p",{class:"mt-2 text-sm text-gray-400"},[Object(n["f"])("Vous êtes l'administrateur du réseau "),Object(n["g"])("br"),Object(n["f"])(" Vous pouvez supprimer cet utilisateur!"),Object(n["g"])("br")],-1),d={class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},b={class:"relative w-auto my-6 mx-auto max-w-sm"},p={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},m={class:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"},g=Object(n["g"])("h3",{class:"text-3xl font-semibold"},"Etes-vous sûr de vouloir supprimer le compte de cet utilisateur ?",-1),j=Object(n["g"])("span",{class:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"},"×",-1),O={class:"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"},f={class:"opacity-25 fixed inset-0 z-40 bg-black"},x={class:"bg-white shadow-2xl"},h={class:"px-4 py-2 mt-2 bg-white"},v={class:"flex items-center justify-between m-2 mb-2 "},y={class:""},w={class:"flex text-gray-700 text-sm "},k={class:"text-xs md:text-base pr-3"},S={class:"text-xs md:text-base"},C=Object(n["f"])("par "),A={class:"text-red-400 "},U={class:"font-bold text-2xl text-gray-800"},J={class:" flex items-center ml-3 mt-8 mb-4"},z={class:"text-justify"};function F(e,t,s,o,r,c){var F=Object(n["u"])("Comment");return Object(n["p"])(),Object(n["d"])("div",null,[0==r.posts.length?(Object(n["p"])(),Object(n["d"])("div",a,[i])):Object(n["e"])("",!0),1==r.isAdmin?(Object(n["p"])(),Object(n["d"])("div",l,[u,Object(n["g"])("button",{type:"button",onClick:t[1]||(t[1]=function(e){return c.toggleModal()}),class:"m-4 cursor-pointer bg-gray-800 hover:bg-red-500 text-white text-sm py-2 px-4 md:font-semibold rounded focus:outline-none focus:shadow-outline h-10"}," supprimer le compte "),Object(n["C"])(Object(n["g"])("div",d,[Object(n["g"])("div",b,[Object(n["g"])("div",p,[Object(n["g"])("div",m,[g,Object(n["g"])("button",{class:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:t[2]||(t[2]=function(e){return c.toggleModal()})},[j])]),Object(n["g"])("div",O,[Object(n["g"])("button",{class:"text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:t[3]||(t[3]=function(e){return c.toggleModal()})}," Annuler "),Object(n["g"])("button",{class:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:t[4]||(t[4]=function(e){return c.deleteUser()})}," Supprimer ")])])])],512),[[n["z"],r.visible]]),Object(n["C"])(Object(n["g"])("div",f,null,512),[[n["z"],r.visible]])])):Object(n["e"])("",!0),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(r.posts,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"m-auto px-4 py-8 max-w-xl",key:e.id},[Object(n["g"])("div",x,[Object(n["g"])("div",h,[Object(n["g"])("div",v,[Object(n["g"])("div",y,[Object(n["g"])("img",{class:"w-6 h-6 sm:w-10 sm:h-10 object-cover rounded-full md:mx-4  shadow",src:e.User.avatar,alt:"photo de profil"},null,8,["src"])]),Object(n["g"])("div",w,[Object(n["g"])("div",k,"Posté le "+Object(n["w"])(c.dateFormat(e.createdAt)),1),Object(n["g"])("div",S,[C,Object(n["g"])("span",A,Object(n["w"])(e.User.firstname),1)])])]),Object(n["g"])("h2",U,Object(n["w"])(e.title),1),Object(n["g"])("img",{src:e.imageurl,class:"w-full"},null,8,["src"]),Object(n["g"])("div",J,[Object(n["g"])("p",z,Object(n["w"])(e.content),1)])]),Object(n["g"])(F,{post:e},null,8,["post"])])])})),128))])}var N=s("bc3a"),B=s.n(N),P=s("4ea3"),D={name:"PostByUserId",props:{user:{type:Object},post:{type:Object}},data:function(){return{posts:[],user_id:JSON.parse(sessionStorage.user).user_id,isAdmin:JSON.parse(sessionStorage.user).isAdmin,visible:!1}},created:function(){this.getUserPosts()},methods:{getUserPosts:function(){var e=this;B.a.get("https://backendgroupomania.herokuapp.com/api/users/".concat(this.$route.params.id,"/posts"),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(sessionStorage.user).token}}).then((function(t){e.posts=t.data.posts,console.log(e.posts)}))},toggleModal:function(){this.visible=!this.visible},deleteUser:function(){var e=this.$route.params.id;B.a.delete("https://backendgroupomania.herokuapp.com/api/users/"+e,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(sessionStorage.user).token}}).then((function(){return location.href="/"}))},dateFormat:function(e){var t=new Date(e),s={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return t.toLocaleDateString("fr-FR",s)}},components:{Comment:P["a"]}};D.render=F;var I=D,L={name:"Allpostuser",components:{LoginForm:r["a"],Header:c["a"],PostsByUserId:I},data:function(){return{connected:!0}},created:function(){this.userConnected()},methods:{userConnected:function(){void 0!==sessionStorage.user?(this.connected=!0,console.log("Utilisateur connecté !")):void 0==sessionStorage.user&&(this.connected=!1,console.log("Utilisateur non connecté !"))}}};L.render=o;t["default"]=L}}]);
//# sourceMappingURL=chunk-1f81826d.fa06c18d.js.map