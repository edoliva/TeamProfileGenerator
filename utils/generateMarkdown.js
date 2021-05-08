function addManager (managerArray) {
    return `<div class="card">
    <div class="card-header">
    ${managerArray[0]}
    </div>
    <div class="card-body">
      <h5 class="card-title">ID: ${managerArray[1]}</h5>
      <p class="card-text">Office number: ${managerArray[2]}</p>
      <a href=mailto:${managerArray[3]} class="btn btn-primary">${managerArray[3]}</a>
    </div>
  </div>`
}

function addEngineer (engineerArray) {
    return `<div class="card">
    <div class="card-header">
    ${engineerArray[0]}
    </div>
    <div class="card-body">
      <h5 class="card-title">ID: ${engineerArray[1]}</h5>
      <a href=https://github.com/${engineerArray[2]} target="_blank" class="btn btn-primary">GitHub</a>
      </br></br>
      <a href=mailto:${engineerArray[3]} class="btn btn-primary">${engineerArray[3]}</a>
    </div>
  </div>`
}

function addIntern (internArray) {
    return `<div class="card">
    <div class="card-header">
    ${internArray[0]}
    </div>
    <div class="card-body">
      <h5 class="card-title">ID: ${internArray[1]}</h5>
      <p class="card-text">School: ${internArray[2]}</p>
      <a href=mailto:${internArray[3]} class="btn btn-primary">${internArray[3]}</a>
    </div>
  </div>`
}

function generateMarkdown(managerArray, engineerArray, internArray) {
    console.log(managerArray);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href= "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <link rel="stylesheet" href="Assets/CSS/style.css"/>
        <title>${managerArray[0]}'s Team</title>
      </head>
      <body>
        <!-- Navbar -->
        <nav class="navbar fixed-top navbar-expand-lg navbar-light" style="background-color: #78aace;">
            <div class="container-fluid">
              <a class="teamProfile"> Logistics Co.</a>
              <div id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#managers">Managers</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#engineers">Engineers</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#interns">Interns</a>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <!-- Carousel -->
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="Images/Shipping.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="Images/Planes.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="Images/Interchange.jpg" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        
        <!-- <Meet the Team> -->
        <!-- <Managers> -->
        <div id="managers"></div>  
        <nav class="navbar navbar-light bg-light" id="emp">
          <a class="navbar-brand" href="#">Managers</a>
        </nav>
        ${addManager(managerArray)}
        
        <!-- <Engineers> -->
          <div id="engineers"></div>  
          <nav class="navbar navbar-light bg-light" id="emp">
            <a class="navbar-brand" href="#">Engineers</a>
          </nav>
          ${addEngineer(engineerArray)}

        
        <!-- <Interns> -->
          <div id="interns"></div> 
          <nav class="navbar navbar-light bg-light" id="emp">
            <a class="navbar-brand" href="#">Interns</a>
          </nav>
          ${addIntern(internArray)}

    
        <script src="index.js"></script> 
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>

    `
}


module.exports = generateMarkdown;