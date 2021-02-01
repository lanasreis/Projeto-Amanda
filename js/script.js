const nav = document.getElementById("nav");
const list = document.getElementById("list");
const content = list.parentNode;

function inicio(){

    nav.innerHTML = '';
    preencheList(db[0], 0);
}

function preencheList(table, id){
    content.className = 'content'
    list.innerHTML="";

    table.forEach(item => {
        let divList = document.createElement('div');
        divList.className = "list-option";
        divList.dataset.id = item.id;
        divList.dataset.ta = item.ta;


        divList.onclick = () => {
            preencheNav(item.title, id);
            console.log(id, db.length)
            if((id + 1) >= db.length-1){
                preenchePlanilha(db[id + 1].filter(i => i.ta == item.id))
            }
            else{
                preencheList( db[id + 1].filter(i => i.ta == item.id) , id+1)
            }
        }

        divList.innerText = item.title;

        list.appendChild(divList)

    })
}

function preencheNav(title, id){
    content.className = 'content'
    let childsNav = nav.childNodes;
    childsNav.forEach(child => {
        child.className = 'option inativo'
    })

    let divNav = document.createElement('div');
    divNav.className = 'option';
    divNav.innerText = title;
    divNav.dataset.tbAtual = id;

    divNav.onclick = () => {
        while(childsNav[id]){
            nav.removeChild(childsNav[id])
        }
        if(childsNav.length > 0){
            childsNav[childsNav.length-1].className = 'option';
        }
        preencheList(db[id], id);
    }

    nav.appendChild(divNav);

}

function preenchePlanilha(listScript){
    content.className = 'content'
    list.innerHTML = "";

    listScript.forEach(ls => {
        let divScript = document.createElement("div");
        divScript.innerText = ls.script;
        divScript.className = 'script';
        list.parentNode.className = 'content planilha';
/*
        let divTable = document.createElement("table");
        let divTHead = document.createElement("thead");
        let divTBody = document.createElement("tbody");
        let th
  */  
        list.appendChild(divScript)
        
    })
}
