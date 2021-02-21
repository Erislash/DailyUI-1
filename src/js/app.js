window.addEventListener('load', StartApp);

function StartApp() {
    const scene = document.querySelector('#scene');
    const home = document.querySelector('#home');
    const signIn = document.querySelector('#signIn');
    const signUp = document.querySelector('#signUp');

    const signInBtn = document.querySelector('#signInBtn');
    const signUpBtn = document.querySelector('#signUpBtn');

    const notRegisteredBtn = document.querySelector('#notRegisteredBtn');
    const alreadyAccountBtn = document.querySelector('#alreadyAccountBtn');


    scene.dataset.state = 'home';
    console.log(scene.dataset.state);
    ShowScene({current: scene.dataset.state, home, signIn, signUp});


    signInBtn.addEventListener('click', function(e){ HandleSceneChange.call(this, e,'signIn')});
    signUpBtn.addEventListener('click', function(e){ HandleSceneChange.call(this, e,'signUp')});
    notRegisteredBtn.addEventListener('click', function(e){ HandleSceneChange.call(this, e,'signUp')});
    alreadyAccountBtn.addEventListener('click', function(e){ HandleSceneChange.call(this, e,'signIn')});   
}


function ShowScene({current, home, signIn, signUp}) {
    home.style.display = home.id == current ? 'flex' : 'none';
    signIn.style.display = signIn.id == current ? 'flex' : 'none';
    signUp.style.display = signUp.id == current ? 'flex' : 'none';
}

function HandleSceneChange(e, newScene){
    e.preventDefault();
    const scene = document.querySelector('#scene');
    scene.dataset.state = newScene;
    ShowScene({current: scene.dataset.state, home, signIn, signUp});
    
}