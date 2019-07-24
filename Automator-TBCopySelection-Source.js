//
//  Automator TBCopySelection.JS
//  Source Code 
//
//  Created by Todd on 7/23/19.
//

function run(input, parameters) {
    
    var output = '';
    var dropbox = "Volumes/Dropbox (SignUpGenius)/SignUpGenius Team/SignUpGenius/"
    // Your script goes here
    for ( i in input ) {
        var x = input[i].toString();
        
        var y = x.startsWith("/")
        
        if (y == true ) {
            x = x.replace('/', '');
        }
        
        var z = x.startsWith(dropbox)
        
        if (z == true ) {
            x = x.replace(dropbox, '');
        }
        
        x = x.replace(/\//g, ' -> ');
        
        output = output + x + String.fromCharCode(13);
    }
    return output;
    
    
}

