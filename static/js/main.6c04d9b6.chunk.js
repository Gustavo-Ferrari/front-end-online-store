(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),l=(a(33),a(20)),o=a(7),s=a.n(o),u=a(12),d=a(13),m=a(25),p=a(1),h=a(2),f=a(4),b=a(3),v=(a(35),a(11)),E=a(5),y=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.labelId,a=e.inputId,n=e.labelText,c=e.name,i=e.type,l=e.onChange,o=e.onKeyDown,s=e.onClick,u=e.classInput,d=e.classLabel,m=e.id;return r.a.createElement("label",{className:d,"data-testid":t,htmlFor:m},r.a.createElement("span",null,n),r.a.createElement("input",{placeholder:"Bucar produtos, marcas e muito mais...",className:u,"data-testid":a,type:i,name:c,id:m,onChange:l,onKeyDown:o,onClick:s}))}}]),a}(n.Component);y.defaultProps={labelId:"",inputId:"",onChange:function(){},onKeyDown:function(){},onClick:function(){},id:""};var g=y;function O(){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.mercadolibre.com/sites/MLB/categories",e.next=3,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(s.a.mark((function e(t,a){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",new Error("You must provide an url"));case 2:return a="https://api.mercadolibre.com/items/".concat(t),e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(22);var A=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=Object(u.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.updateAppState,t.next=3,O();case 3:n=t.sent,a({categoriesArray:n});case 5:case"end":return t.stop()}}),t)}))),e.onRadioButtonClick=function(t){var a=e.props;(0,a.updateAppState)({categoryId:t},a.handleClick)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.categoriesArray;return r.a.createElement("div",{className:"sideCard"},r.a.createElement("p",null,"CategoriesSidebar"),r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(g,{classInput:"sidebarInput",classLabel:"sidebarLabel",type:"radio",name:"item-categoria",id:t.id,labelText:t.name,labelId:"category",onChange:function(){return e.onRadioButtonClick(t.id)}}))}))))}}]),a}(n.Component);A.defaultProps={categoriesArray:[]};var x=A,N=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dataId,a=e.productName,n=e.src,c=e.price,i=e.productId,l=e.imageId,o=e.onAddProduct,s=e.isAddDisabled,u=e.freeShipping;return r.a.createElement("div",{className:"products"},r.a.createElement(v.b,{to:"/product-details/".concat(i)},r.a.createElement("div",{"data-testid":t},r.a.createElement("img",{"data-testid":l,src:n,alt:"Imagem do produto: ".concat(a)}),r.a.createElement("h2",null,a),r.a.createElement("p",{className:"p"},"Pre\xe7o: RS$ ".concat(c)))),u&&r.a.createElement("p",{"data-testid":"free-shipping"},"Frete Gr\xe1tis"),r.a.createElement("button",{"data-testid":"product-add-to-cart",type:"button",onClick:o,disabled:s},"Adicionar ao carrinho"))}}]),a}(r.a.Component),P=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.searchResults,a=e.onAddProduct;return r.a.createElement("div",null,r.a.createElement("p",null,"Product List"),t.map((function(e){return r.a.createElement(N,{key:e.id,dataId:"product",productName:e.title,imageId:"product-detail-link",price:e.price,src:e.thumbnail,productId:e.id,onAddProduct:function(){return a(e)},isAddDisabled:e.isAddDisabled,freeShipping:e.shipping.free_shipping})})))}}]),a}(n.Component);P.defaultProps={searchResults:[]};var w=P,D=a(17),B=(a(23),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(v.b,{to:"/",className:"homeIcon"},r.a.createElement(D.a,null))}}]),a}(n.Component)),R=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"getCartQuantity",value:function(){var e,t=JSON.parse(null!==(e=localStorage.getItem("cartItems"))&&void 0!==e?e:"[]"),a=0;return t.forEach((function(e){a+=e.cartQuantity})),a}},{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(B,null),r.a.createElement("h1",null," Front-End Online Store "),r.a.createElement(v.b,{to:"/CardCarrinho",className:"cartIcon","data-testid":"shopping-cart-button"},r.a.createElement(D.b,null),r.a.createElement("span",{"data-testid":"shopping-cart-size"},this.getCartQuantity())))}}]),a}(n.Component),F=(a(44),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.searchInput,a=e.handleChange,n=e.handleClick,c=e.handleOnKeyDown,i=e.handleAddProduct;return r.a.createElement("div",{className:"body"},r.a.createElement(R,null),r.a.createElement("div",{className:"search"},r.a.createElement(g,{classInput:"searchInput",classLabel:"searchLabel",type:"text",labelId:"home-initial-message",inputId:"query-input",labelText:"Digite algum termo de pesquisa ou escolha uma categoria.",value:t,name:"searchInput",onChange:a,onKeyDown:c}),r.a.createElement("button",{className:"searchButton",type:"button","data-testid":"query-button",onClick:n},"Pesquisar")),r.a.createElement("div",{className:"allProducts"},r.a.createElement("section",{className:"sideBar"},r.a.createElement(x,this.props)),r.a.createElement("section",{className:"productsList"},r.a.createElement(w,Object.assign({},this.props,{onAddProduct:i})))))}}]),a}(n.Component));F.defaultProps={searchInput:""};var Q=F,q=(a(45),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addtoCartItem=function(t){var a=e.props,n=a.cartItems,r=a.updateAppState,c=a.isAddButtonDisabled,i=n.findIndex((function(e){return e.id===t.id})),l=n[i];l.cartQuantity+=1,l.totalPrice+=l.price,l.isAddDisabled=c(t),localStorage.setItem("cartItems",JSON.stringify(n)),r({cartItems:n})},e.removeFromCartItem=function(t){var a=e.props,n=a.cartItems,r=a.updateAppState,c=a.isAddButtonDisabled,i=n.findIndex((function(e){return e.id===t.id})),l=n[i];if(l.cartQuantity-=1,l.totalPrice-=l.price,l.isAddDisabled=c(t),l.cartQuantity<=0)return r({cartItems:n.filter((function(e){return e.id!==t.id}))}),void localStorage.setItem("cartItems",JSON.stringify(n));localStorage.setItem("cartItems",JSON.stringify(n)),r({cartItems:n})},e}return Object(h.a)(a,[{key:"getCartQuantity",value:function(){var e=this.props.cartItems,t=0;return e.forEach((function(e){t+=e.cartQuantity})),t}},{key:"render",value:function(){var e=this,t=this.props.cartItems;return r.a.createElement("div",{className:"cart-body"},r.a.createElement(R,{cartNumberOfItems:this.getCartQuantity()}),r.a.createElement("div",{className:"cart"},t.length>0?t.map((function(t){return r.a.createElement("div",{className:"cart-item",key:t.id},r.a.createElement("img",{alt:t.name,src:t.thumbnail}),r.a.createElement("p",{"data-testid":"shopping-cart-product-name"},t.title),r.a.createElement("p",{"data-testid":"shopping-cart-product-quantity"},"Quantidade: ".concat(t.cartQuantity)),r.a.createElement("p",null,"Total: R$ ".concat(t.totalPrice.toFixed(2))),r.a.createElement("button",{className:"addButton","data-testid":"product-decrease-quantity",type:"button",onClick:function(){return e.removeFromCartItem(t)}},"-"),r.a.createElement("button",{className:"addButton","data-testid":"product-increase-quantity",type:"button",onClick:function(){return e.addtoCartItem(t)},disabled:t.isAddDisabled},"+"))})):r.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio")),r.a.createElement("section",null,t.length>0&&r.a.createElement("div",{className:"cartLink"},r.a.createElement(v.b,{className:"link","data-testid":"checkout-products",to:"/checkout"},r.a.createElement("p",null,"Comprar")))))}}]),a}(n.Component)),J=a(16),L=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={index:[]},e.isRadioSelected=function(t){return e.props.rating===t},e}return Object(h.a)(a,[{key:"ratingArray",value:function(){for(var e=[],t=1;t<=5;t+=1)e.push(t);this.setState({index:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.user,n=t.comment,c=this.state.index;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"email"},a),c.map((function(t){return r.a.createElement("label",{htmlFor:"radio".concat(t),key:t},t,r.a.createElement("input",{id:"radio".concat(t),type:"radio",name:"".concat(t,"-rating"),value:t,checked:e.isRadioSelected(t),disabled:!0}))}))),r.a.createElement("p",null,n))}}]),a}(r.a.Component),K=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.arrayOfEvaluation,a=e.match.params.id,n=t.filter((function(e){return e.id===a}));return r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(L,{key:t,user:e.user,rating:e.rating,comment:e.comment})})))}}]),a}(r.a.Component);K.defaultProps={arrayOfEvaluation:[]};var M=K,T=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).handleRadioClick=function(t){var a=t.target,n=a.name,r="radio"===a.type?+a.value:a.value;e.setState(Object(d.a)({},n,r))},e.isRadioSelected=function(t){return e.state.selectedRadioButton===t},e.onEvaluationClic=function(){var t=e.state,a=t.user,n=t.comment,r=t.selectedRadioButton,c=e.props.match.params.id,i=JSON.parse(localStorage.getItem("evaluations")),l={user:a,comment:n,id:c,rating:r};i?(i.push(l),localStorage.setItem("evaluations",JSON.stringify(i))):localStorage.setItem("evaluations",JSON.stringify([l])),e.setState({user:"",comment:"",selectedRadioButton:null}),e.getEvaluation()},e.state={user:"",comment:"",disabled:!0,selectedRadioButton:null,index:[]},e.handleChange=e.handleChange.bind(Object(J.a)(e)),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getEvaluation(),this.ratingArray()}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.disabled,a=e.selectedRadioButton;a&&t?this.setState({disabled:!1}):a||t||this.setState({disabled:!0})}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(d.a)({},n,a))}},{key:"getEvaluation",value:function(){var e=JSON.parse(localStorage.getItem("evaluations"));e&&this.setState({arrayOfEvaluation:e})}},{key:"ratingArray",value:function(){for(var e=[],t=1;t<=5;t+=1)e.push(t);this.setState({index:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.comment,c=t.index,i=t.disabled;return r.a.createElement("div",null,r.a.createElement("h1",null,"Avalia\xe7\xf5es"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,c.map((function(t){return r.a.createElement("label",{htmlFor:"radio".concat(t),key:t},t,r.a.createElement("input",{id:"radio".concat(t),type:"radio","data-testid":"".concat(t,"-rating"),name:"selectedRadioButton",value:t,checked:e.isRadioSelected(t),onChange:e.handleRadioClick}))}))),r.a.createElement("div",null,r.a.createElement("input",{id:"user",name:"user",value:a,type:"text",placeholder:"Email",onChange:this.handleChange,"data-testid":"product-detail-email"})),r.a.createElement("div",null,r.a.createElement("textarea",{id:"comment",name:"comment",value:n,"data-testid":"product-detail-evaluation",placeholder:"Coment\xe1rios",onChange:this.handleChange})),r.a.createElement("button",{"data-testid":"submit-review-btn",type:"button",disabled:i,onClick:this.onEvaluationClic},"AVALIA")),r.a.createElement(M,Object.assign({},this.state,this.props)))}}]),a}(n.Component),$=(a(46),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=Object(u.a)(s.a.mark((function t(){var a,n,r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,n=a.match.params.id,r=a.updateAppState,t.next=3,I(n);case 3:c=t.sent,r({currentProductDetailed:c});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentProductDetailed,a=e.handleAddProduct,n=t.title,c=t.thumbnail,i=t.price,l=t.attributes;return r.a.createElement("div",{className:"body"},r.a.createElement(R,null),r.a.createElement("section",{className:"details"},r.a.createElement("h1",{"data-testid":"product-detail-name"},n),r.a.createElement("img",{src:c,alt:"Imagem do produto ".concat(n)}),r.a.createElement("p",null,"Pre\xe7o:","R$ ".concat(i.toLocaleString("pt-br"))),r.a.createElement("button",{type:"button","data-testid":"product-detail-add-to-cart",onClick:function(){return a(t)}},"Adicionar ao carrinho")),r.a.createElement("div",{className:"evaluation"},r.a.createElement(T,this.props)),r.a.createElement("h2",null,"Especifica\xe7\xf5es T\xe9cnicas"),r.a.createElement("div",{className:"specifications"},l.map((function(e){var t=e.name,a=e.id,n=e.value_name;return r.a.createElement("p",{key:a},"".concat(t,": "),r.a.createElement("span",null,n))}))))}}]),a}(n.Component));$.defaultProps={currentProductDetailed:{title:"",price:"",attributes:[]}};var z=$,_=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.email,n=e.cpf,c=e.phone,i=e.postalCode,l=e.address,o=e.onClick,s=e.onChange;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"name"},r.a.createElement("p",null,"Nome Completo:"),r.a.createElement("input",{required:!0,name:"name",type:"text","data-testid":"checkout-fullname",onChange:s,value:t})),r.a.createElement("label",{htmlFor:"email"},r.a.createElement("p",null,"E-mail:"),r.a.createElement("input",{required:!0,name:"email",type:"email","data-testid":"checkout-email",onChange:s,value:a})),r.a.createElement("label",{htmlFor:"cpf"},r.a.createElement("p",null,"CPF:"),r.a.createElement("input",{required:!0,name:"cpf",type:"text","data-testid":"checkout-cpf",placeholder:"xxx.xxx.xxx-xx",onChange:s,value:n})),r.a.createElement("label",{htmlFor:"phone"},r.a.createElement("p",null,"Telefone:"),r.a.createElement("input",{required:!0,name:"phone",type:"text","data-testid":"checkout-phone",onChange:s,value:c})),r.a.createElement("label",{htmlFor:"postalCode"},r.a.createElement("p",null,"CEP:"),r.a.createElement("input",{required:!0,name:"postalCode",type:"text","data-testid":"checkout-cep",onChange:s,value:i})),r.a.createElement("label",{htmlFor:"address"},r.a.createElement("p",null,"Endere\xe7o:"),r.a.createElement("input",{required:!0,name:"address",type:"text","data-testid":"checkout-address",onChange:s,value:l})),r.a.createElement("br",null),r.a.createElement("button",{className:"form-button",type:"submit",onClick:o},"Finalizar Compra")))}}]),a}(r.a.Component),W=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.amount,a=e.price,n=e.thumbnail,c=e.title;return r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:n,alt:c}),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Nome do Produto: "),c),r.a.createElement("p",null,r.a.createElement("strong",null,"Quantidade: "),t),r.a.createElement("p",null,r.a.createElement("strong",null,"Pre\xe7o: RS$ "),a)))}}]),a}(r.a.Component),G=(a(47),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={totalPrice:0,name:"",email:"",cpf:"",phone:"",postalCode:"",address:"",purchaseFinished:!1},e.handlePrice=function(){var t=e.props.cartItems.map((function(e){return e.totalPrice})).reduce((function(e,t){return e+t}));e.setState({totalPrice:t})},e.handleClick=function(){e.setState({name:"",email:"",cpf:"",phone:"",postalCode:"",address:"",purchaseFinished:!0})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.handlePrice()}},{key:"render",value:function(){var e=this.props.cartItems,t=this.state.totalPrice,a=this.state,n=a.name,c=a.email,i=a.cpf,l=a.phone,o=a.postalCode,s=a.address,u=a.purchaseFinished;return r.a.createElement("div",{className:"body"},r.a.createElement(R,null),u&&r.a.createElement(E.a,{to:"/"}),r.a.createElement("div",null,r.a.createElement("div",{className:"item-container"},e.map((function(e){return r.a.createElement(W,{key:e.id,title:e.title,price:e.totalPrice.toFixed(2),amount:e.cartQuantity,thumbnail:e.thumbnail})}))),r.a.createElement("section",{className:"form"},r.a.createElement("p",null,"Total a pagar: ".concat(t.toFixed(2))),r.a.createElement(_,{name:n,email:c,cpf:i,phone:l,postalCode:o,address:s,onClick:this.handleClick,onChange:this.handleChange}))))}}]),a}(r.a.Component));G.defaultProps={cartItems:[]};var U=G,V=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e,n;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=t.call.apply(t,[this].concat(c))).state={searchInput:"",cartItems:JSON.parse(null!==(e=localStorage.getItem("cartItems"))&&void 0!==e?e:"[]")},n.updateAppState=function(e,t){n.setState(Object(m.a)({},e),t)},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n.handleClick=Object(u.a)(s.a.mark((function e(){var t,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.searchInput,r=t.categoryId,e.next=3,j(r,a);case 3:c=e.sent,(i=c.results).forEach((function(e){e.isAddDisabled=!1})),n.setState({searchResults:i});case 7:case"end":return e.stop()}}),e)}))),n.handleOnKeyDown=function(e){"Enter"===e.key&&n.handleClick()},n.handleAddProduct=function(e){var t=n.state.cartItems,a=t.findIndex((function(t){return t.id===e.id}));if(a>=0){var r=t[a];return r.cartQuantity+=1,r.totalPrice+=r.price,r.availability=n.isAddButtonDisabled(e),n.setState({cartItems:t}),void localStorage.setItem("cartItems",JSON.stringify(t))}e.cartQuantity=1,e.availability=n.isAddButtonDisabled(e),e.totalPrice=e.price,n.checkAvalabilityOfResults(e),n.setState({cartItems:[].concat(Object(l.a)(t),[e])}),localStorage.setItem("cartItems",JSON.stringify([].concat(Object(l.a)(t),[e])))},n.checkAvalabilityOfResults=function(e){var t=n.state.searchResults,a=t.findIndex((function(t){return t.id===e.id})),r=t[a];r.isAddDisabled=n.isAddButtonDisabled(r),n.setState({searchResults:t})},n.isAddButtonDisabled=function(e){return e.cartQuantity===e.available_quantity},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state.cartItems;return r.a.createElement(v.a,null,r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",render:function(){return r.a.createElement(Q,Object.assign({},e.state,{handleChange:e.handleChange,updateAppState:e.updateAppState,handleClick:e.handleClick,handleOnKeyDown:e.handleOnKeyDown,handleAddProduct:e.handleAddProduct}))}}),r.a.createElement(E.b,{exact:!0,path:"/CardCarrinho",component:function(){return r.a.createElement(q,{cartItems:t,updateAppState:e.updateAppState,isAddButtonDisabled:e.isAddButtonDisabled})}}),r.a.createElement(E.b,{path:"/product-details/:id",render:function(t){return r.a.createElement(z,Object.assign({},t,e.state,{updateAppState:e.updateAppState,handleAddProduct:e.handleAddProduct}))}}),r.a.createElement(E.b,{path:"/checkout",render:function(){return r.a.createElement(U,e.state)}})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.6c04d9b6.chunk.js.map