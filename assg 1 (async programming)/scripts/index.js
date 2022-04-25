
var arr = []
async function getdata(){
    var res_movie = await fetch(`http://www.omdbapi.com/?s=x-men&apikey=5d83ba84`)
    // console.log(res_movie)
    var data_movie = await res_movie.json()
    // console.log(data_movie)
    console.log('data_movie.Search',data_movie.Search)
    // var res_rating = await fetch(`https://www.omdbapi.com/?i=tt0120903&apikey=5d83ba84`)
    list(data_movie.Search)

}
getdata()

// function get_rating(id){
//     var res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=5d83ba84`)
//     // console.log(res)
//     var data = await res.json()
//     // console.log(data.imdbRating)
//     return data.imdbRating
// }
// get_rating('tt0120903')  


// function something(){
//     fetch(`https://www.omdbapi.com/?i=${element.imdbID}&apikey=5d83ba84`).then(function (res){
//             res.json().then(function(res){
//                 console.log(res.imdbRating)
//             })
//         })
// }

function list(data){
    data.forEach(element => {
        var a;
        fetch(`https://www.omdbapi.com/?i=${element.imdbID}&apikey=5d83ba84`).then(function (res){
            res.json().then(function(res){
                // console.log(res.imdbRating)
                a = res.imdbRating
                // console.log(a)
            })
        })
        console.log('a',a)
        // console.log(get_rating(element.imdbID))
        // arr.push({
        //     moviename:element.Title,
        //     release_date:element.Year,
        //     poster:element.Poster
        // })
    });
    localStorage.setItem('movie',JSON.stringify(arr))
    // console.log(localStorage.getItem('movie'))
}


// var arr = [
//     {
//         "moviename": "X-Men: Days of Future Past",
//         "release_date": "2014",
//         "poster": "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
//     },
//     {
//         "moviename": "X-Men: First Class",
//         "release_date": "2011",
//         "poster": "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg"
//     }, 
//     {
//         "moviename": "X-Men", 
//         "release_date": "2000", 
//         "poster": "https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" 
//     }, 
//     { 
//         "moviename": "X2: X-Men United", 
//         "release_date": "2003", 
//         "poster": "https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_SX300.jpg" 
//     }, 
//     { 
//         "moviename": "X-Men: The Last Stand", 
//         "release_date": "2006", 
//         "poster": "https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg" 
//     }, 
//     { 
//         "moviename": "X-Men Origins: Wolverine", 
//         "release_date": "2009", 
//         "poster": "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg" 
//     }, 
//     { 
//         "moviename": "X-Men: Apocalypse", 
//         "release_date": "2016", 
//         "poster": "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg" 
//     }, 
//     { 
//         "moviename": "X-Men: Dark Phoenix", 
//         "release_date": "2019", 
//         "poster": "https://m.media-amazon.com/images/M/MV5BMmZmYTgwZGItNDIxMS00MmRkLWEzODQtYTllNzM0ZWE1NmQ5XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg" 
//     }, 
//     { 
//         "moviename": "X-Men: The Animated Series", 
//         "release_date": "1992–1997", 
//         "poster": "https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" 
//     }
// ]

// localStorage.setItem('movie',JSON.stringify(arr))
//     console.log(localStorage.getItem('movie'))

