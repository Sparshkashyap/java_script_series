
customElements.define('sp-tag',
    class extends HTMLElement{
        connectedCallback(){
            const temp=this.attachShadow({mode:'open'});
            temp.innerHTML=`<p class="error"> Hello ${ this.getAttribute('data')}</p>`


        }
    }
)

const k=document.querySelector('#h2');
const sh=k.attachShadow({mode:'open'});

sh.innerHTML="<p class='error'>This is a custom tag which is create by sparsh</p>"




