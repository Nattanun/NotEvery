PennController.ResetPrefix(null); // Initiates PennController

PennController.Sequence( "welcome" , "experiment" , "send" , "final" ) //or you can randomize the experiment

PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will have to report which of two pictures matches a description.</p>")
    ,
    newText("<p>Press the <strong>F</strong> key for the picture on the left, or the <strong>J</strong> key for the picture on the right.</p>")
    ,
    newText("<p>Please enter your age and gender then click the button below to start the experiment.</p>")
    ,
    newTextInput("Age")
        .print()
    ,
    newVar("Age")
        .settings.global()
        .set( getTextInput("Age") )
)
.log( "Age" , getVar("Age")  )
)


// Start typing your code here

PennController.Template( 
  variable => PennController( "experiment" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("description", variable.AudioFile)
        .play()
    ,
    //newText(variable.Description)
    //    .unfold(2600)
    //,
    newImage("visible", variable.ImageFile)
        .settings.size(600,200)
    ,
    newImage("cov", "Covered_Box.jpg")
        .settings.size(600,400)
    ,
    newCanvas(1250,400)
        .settings.add(   0 , 100 , getImage("visible") )
        .settings.add( 650 , 0 , getImage("cov") )
        .print()
    ,
    newSelector()
        .settings.add( getImage("visible") , getImage("cov") )
        .settings.keys(          "F"    ,          "J"   )
        .settings.log()
        .wait()
    ,
    getAudio("description")
       .wait("first")
    ,
    newTimer(500)
        .start()
        .wait()
  )
  .log( "age" , getVar("Age") )
  .log( "gender" , getVar("Gender") )
  .log( "Item"   , variable.Item   )
  .log( "Group"  , variable.Group  )
  .log( "MainCond" , variable.MainCond )
  .log( "Condition" , variable.Condition )
)


// Completion screen
PennController.SendResults( "send" )
PennController( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)