

//thuoc tinh  Conchild no se la thuoc tinh cha trong element 
let Conchild = document.querySelector('#Conchild');
console.log(Conchild);
let arr=[];

//ham appendChild luu  cac phan tu vao the cha moi khi duoc goi vao  boi ham renderEge

function appendChild(element){
            let divEge=document.createElement('div');
            divEge.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'mb-4','mr-2'); 
           //anh san pham 
           let image=document.createElement('img');
            image.src=element.image;
            image.classList.add('product-image');
           //the loai
           let button=document.createElement('button');
           button.classList.add('btn','btn-primary','mb-2','d-block','showtoggle');
           button.innerText="Show";
           button.classList.add('d-block','mx-auto');
           //the loai san pham
           let catogory=document.createElement('h8');
           catogory.innerText=element.category;
              catogory.classList.add('d-block','mb-2','text-center','text-muted');
           //gia san pham 
           let price=document.createElement('strong');
           price.innerText=element.price;
           price.classList.add('d-block','mb-2','text-center');

           //gioi thieu san pham 
           let destip=document.createElement('p');
           destip.innerText=element.description;
           destip.classList.add('d-none','mb-2');

            //ten san pham 
            let title=document.createElement('strong','font-size-2');
            title.innerText=element.title;
            title.classList.add('text-center','d-block','mb-2');
            //danh gia san pham
            let rate=document.createElement('span');
            rate.innerText=element.rating.rate;
            rate.classList.add('mr-2');
            //so luong danh gia san pham 
            let count=document.createElement('span');
            count.innerText=element.rating.count;
            count.classList.add('text-center','d-block','mt-2');
            
            divEge.appendChild(image);
            divEge.appendChild(title);
            divEge.appendChild(price);
            divEge.appendChild(button);
            button.addEventListener('click',()=>{
                destip.classList.toggle('d-none');
            })
            divEge.appendChild(catogory);
            divEge.appendChild(destip); 
            divEge.appendChild(rate);
            divEge.appendChild(count);
            Conchild.appendChild(divEge);
            return divEge;
            
}

function renderEge(){
         arr.forEach(element=>{
            let divEge=appendChild(element);
            divEge.classList.add('box');
            console.log(divEge);
         })
}

//ham showEge de goi api cung nhu luu du lieu vao mang arr
async function showFire() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        arr = json;
        renderEge();
    } catch (err) {
        console.log(err);
    }
}

showFire();
