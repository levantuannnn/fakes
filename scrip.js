

//thuoc tinh  Conchild no se la thuoc tinh cha trong element 
let Conchild = document.querySelector('#Conchild');
console.log(Conchild);
let arr=[];
let pike=document.querySelector('.pike');
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
           button.innerText="xem chi tiet";
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
            rate.innerText='rate'+' '+element.rating.rate;
            rate.classList.add('mr-2');
            //so luong danh gia san pham 
            let count=document.createElement('span');
            count.innerText='count:'+' '+element.rating.count;
            count.classList.add('text-center','d-block','mt-2');
            
            divEge.appendChild(image);
            divEge.appendChild(title);
            divEge.appendChild(price);
            divEge.appendChild(button);
            button.addEventListener('click',()=>{
               
                arr.forEach(ele=>{
                    if(ele.id===element.id){
                        document.querySelector('.pike .dasboa').innerHTML=
                        `<img src=${ele.image} style="width:200px;height:200px;"></img>`
                        + `<h6>${ele.title}</h6>`
                        + `<p>Category: ${ele.category}</p>`
                        + `<p>Price: $${ele.price}</p>`
                        + `<p>Description: ${ele.description}</p>`
                        + `<p>Rating: ${ele.rating.rate} (${ele.rating.count} reviews)</p>`;
                        pike.classList.remove('d-none');
                    }
            })});
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
// xu ly input text khi  user nhap vao 

let input_child_text=document.querySelector('#input_child_text');
input_child_text.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
         let value=e.target.value.toLowerCase();
         Conchild.innerHTML='';
        let  update  = arr.filter(element=>{
             return element.title.toLowerCase().includes(value) || element.category.toLowerCase().includes(value);
         })
         if( update.length===0){
             alert('Khong tim thay san pham');
             renderEge();
             
         }
         update.forEach(element=>{
             appendChild(element);
         })
    }
} 
)

//xu ly nut button xap xep giam dan 
//sort_desc la mang da duoc xap xep giam dan
let button_sort_desc=document.querySelector('.sort_child');
button_sort_desc.addEventListener('click',()=>{
    console.log('click');
    Conchild.innerHTML='';
     let  Sort_desc  = arr.sort((a,b)=>{
         return b.price - a.price;
     })
     Sort_desc.forEach(element=>{
         appendChild(element);
     })
});
//xu ly nut button xap xep tang dan
//sort_asc la mang da duoc xap xep tang dan
let button_sort_asc=document.querySelector('.sort_asc');
button_sort_asc.addEventListener('click',()=>{
    console.log('click');
    Conchild.innerHTML='';
        let  Sort_asc  = arr.sort((a,b)=>{
             return a.price - b.price;
        });
        Sort_asc.forEach(element=>{
             appendChild(element);
        });
});
///kiem  tra xem thu neu da co thuoc tinh d-none roi thi xoa di neu chua co thi them vao dong hop thoai
  
let close=document.querySelector('.pike .close');
close.addEventListener('click',()=>{ 
    pike.classList.toggle('d-none');
})
//search tim kiem 
let search=document.querySelector('.search');
search.addEventListener('click',()=>{
    let input_child_text=document.querySelector('#input_child_text').value.toLowerCase();
    Conchild.innerHTML='';
    let  update  = arr.filter(element=>{
         return element.title.toLowerCase().includes(input_child_text) || element.category.toLowerCase().includes(input_child_text);
     })
     if( update.length===0){
         alert('Khong tim thay san pham');
         renderEge();  
     }
     update.forEach(element=>{
         appendChild(element);
     });
});