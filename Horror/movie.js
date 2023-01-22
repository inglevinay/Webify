var path = window.location.pathname;
let pathdir = path.split("/");
var page = pathdir.pop();
var genre = pathdir.pop();

const data = {
    'tumbbad' : {
        'name' : 'Tumbbad',
        'poster-url' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lwsefIF_dHj01pdCK1qJ6aqLlAu7juX2Oe9ZjazQ&s",
        'link' : '/Horror/tumbbad.html',
        'background-url' : 'https://ilarge.lisimg.com/image/19579411/1118full-tumbbad-%282018%29-screenshot.jpg',
        'release-year' : "2000",
        'description' : "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born.",
    },

    'thing' : {
        'name' : 'Thing',
        'poster-url' : "https://images-na.ssl-images-amazon.com/images/I/61Mf%2B-TcV8L.jpg",
        'link' : '/Horror/thing.html',
        'background-url' : "https://film-grab.com/wp-content/uploads/photo-gallery/03%20(1176).jpg?bwg=1547474340",
        'release-year' : "2000",
        'description' : "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    },

    'shining' : {
        'name' : 'Shining',
        'poster-url' : "https://alternativemovieposters.com/wp-content/uploads/2022/10/Stella-Ygris_Shining.jpg",
        'link' : '/Horror/shining.html',
        'background-url' : "https://film-grab.com/wp-content/uploads/photo-gallery/39%20(1181).jpg?bwg=1547470754",
        'release-year' : "2013",
        'description' : "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    },

    'psycho' : {
        'name' : 'Psycho',
        'poster-url' : "https://i.etsystatic.com/21420603/r/il/81fd11/2782690640/il_fullxfull.2782690640_nn4r.jpg",
        'link' : '/Horror/psycho.html',
        'background-url' : "https://film-grab.com/wp-content/uploads/photo-gallery/31%20(838).jpg?bwg=1547297037",
        'release-year' : "2012",
        'description' : "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
    },

    'alien' : {
        'name' : 'Alien',
        'poster-url' : "https://cdn.shopify.com/s/files/1/0969/9128/products/alien--covenant-the-official-collector--s-edition-cover-102516_1a9162a0-d5b6-4288-896b-af6caf2c71b6.jpg?v=1514034484",
        'link' : '/Horror/alien.html',
        'background-url' : "https://film-grab.com/wp-content/uploads/photo-gallery/31%20(1196).jpg?bwg=1547474338",
        'release-year' : "2012",
        'description' : "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
    }
}

const movie =  page.split('.')[0];
console.log(movie);

if(movie in data){
    document.title = data[movie].name;
    document.getElementById("st-bg").style = `background-image: url(" ${data[movie]["background-url"]} ");`;
    document.getElementById("titleid").innerHTML = data[movie].name;
    document.getElementById("yearid").innerHTML = data[movie]["release-year"];
    document.getElementById("descid").innerHTML = data[movie].description;

    // for(let i=1; i<5; i++){
    //     // console.log(Object.keys(data).indexOf(movie));
    //     if(i-1 != Object.keys(data).indexOf(movie)){
    //         var lnk = "rec-link"+i;
    //         console.log(lnk);
    //         document.getElementById(lnk).href = data[i-1].link ;
    //     }
        
    // }

    var ind = 1;
    for(var mv in data){
        if(mv != movie){
            var lnk = "rec-link"+ind;
            var pst = "rec-img"+ind;
            console.log(lnk);
            document.getElementById(lnk).href = data[mv].link ;
            document.getElementById(pst).src = data[mv]["poster-url"];
            ind++;
        }
    }


}

else{
    document.title = "error";
}