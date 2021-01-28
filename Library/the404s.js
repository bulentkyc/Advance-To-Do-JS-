/*

*/

function $ (query, log, arr, index) {
    let res = document.querySelectorAll(query);
    //console.log(res);

    let output = null;

    switch (res.length) {
        case 0:
            break;
        case 1:
            if (arr) {
                output = [];
                output.push(res[0]);
            } else {
                output = res[0];
            }
            break;
        default:
            output = [];
            for (let i = 0; i < res.length; i++) {
                output.push(res[i]);
            }
            break;
    }

    if (index >= 0) {
        if (res.length <= 1) {
            throw ('Hey you have just 1 item or any. Please don\'t set any index for this quey');
            //console.warn('Hey you have just 1 item or any. Please don\'t set any index for this quey')
        }
        if (log != null) {
            console.log(log +': ', output[index]);
        }
        
        return output[index];
    } else {
        if (log != null) {
            console.log(log +': ', output);
        }
        return output;
    }

}


function parentPicker(selector) {
    let collection = [];
    let parent = document.querySelector(selector).parentElement;
    //console.log(parent.tagName);

    while (parent != null) {

        //console.log('1')
        collection.push(parent);
        parent = parent.parentElement;
    }

    return (collection);
}


let boilerPlateHTML = `
<header>
    <h1>Welcome</h1>
</header>
<main></main>
<footer>
Made with ❤️ by Bülent Kayici
</footer>`

let boilerPlateStyles = {
    body: {
        textAlign: 'center'
    },
    header: {
        width: '100vw'
    },
    main: {
        width: '100vw',
        display: 'flex',
        justifyContent: 'center'
    },
    footer:{
        width: '100vw',
        height: '50px',
        backgroundColor: 'coral'
    }
}

export { $, parentPicker, boilerPlateHTML, boilerPlateStyles };
//Heads-up: Please don't combine different export syntaxes