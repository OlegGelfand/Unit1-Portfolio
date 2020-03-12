console.log("this works")

let url = 'https://docs.google.com/spreadsheets/d/1ZgSrmkNKNaoR9jbnrp_he1qtHLmGJsq191HpCkT86sM/edit?usp=sharing'
let id = '1ZgSrmkNKNaoR9jbnrp_he1qtHLmGJsq191HpCkT86sM'

let source = `https://spreadsheets.google.com/feeds/list/1ZgSrmkNKNaoR9jbnrp_he1qtHLmGJsq191HpCkT86sM/od6/public/values?alt=json`
// let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

// ES6 - fetch
// fetching my source above
fetch(source)
//once fetched I am then taking that data and its results and going to parse the data to be readable in json
  .then( response => response.json() ) // this parses the data from string back into an object
//then i took the readable data, called it "data" and console.logged it to see it in the console.
  .then( data =>  {
      console.log('data', data)
      // data.feed.entry is the array that stores our projects
      // the projects are stored as objects
// i then took the function, "projects" and guided it through the key values until the location of our data. then i mapped out the data based on the ARGUMENT of projects
      let projects = data.feed.entry.map( project => {
        //when the data was mapped out I had it return only the data that i wanted, and called that data what i wanted-"title, image, description,url"
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t
        }
      })
      //i then called the function app with paramater projects
      app(projects)
    }) 
//i declared a section to grab that tag from the html
const $section= $('section');
console.log($section)
// i then called the function app with projects again as the paramater
function app (projects){
  //i console logged by naming my object 'app-projects', and used parameter projects
  console.log('app-projects', projects) 
    //I then ran the function projects stating that for each item that i returned within the projects function, i wanted to create an article and image tag
  projects.forEach( iconData => {
    let $picture= `<picture>
                      <h4>${iconData.title}</h4>
                      <img src=${iconData.image}>
                    </picture>`
                    //i then appended the article to the section and it showed up on my browser!
    $section.append($picture);
  })
};

