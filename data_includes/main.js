PennController.ResetPrefix(null); // Initiates PennController

PennController.Sequence( "welcome" , "practiceA" , "practiceB" , "practiceC" , "practiceD" , "experiment" , "send" , "final" ) //or you can randomize the experiment

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
    ,
    newDropDown("GenderOptions", "")
    .settings.add("หญิง", "ชาย")
    .select( "หญิง" )
    ,
    newText("เพศกำเนิด")
    .settings.after( getDropDown("GenderOptions") )
    .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("Gender")
        .settings.global()
        .set( getTextInput("GenderOptions") )
)
.log( "Age" , getVar("Age") 
.log( "Gender" , getVar("Gender") )


// Start typing your code here

PennController.Template( 
  variable => PennController( "practiceA" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeA1", "A_01.wav")
        .play()
    ,
    newImage("ImageVisPracticeA1", "A_1.jpg")
        .settings.size(1200,400)
    ,
    newCanvas(1250,400)
        .settings.add(   25 , 0 , getImage("ImageVisPracticeA1") )
        .print()
    ,
    getAudio("audPracticeA1")
       .wait("first")
    ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeA", "A_02.wav")
        .play()
    ,
    newImage("ImageVisPracticeA", "A_2.jpg")
        .settings.size(600,400)
    ,
    newImage("Pcov", "Covered_Box.jpg")
        .settings.size(600,400)
    ,
    newCanvas(1250,400)
        .settings.add(   0 , 0 , getImage("ImageVisPracticeA") )
        .settings.add( 650 , 0 , getImage("Pcov") )
        .print()
    ,
    newSelector()
        .settings.add( getImage("ImageVisPracticeA") , getImage("Pcov") )
        .settings.keys(          "F"    ,          "J"   )
        .settings.log()
        .wait()
    ,
    getAudio("audPracticeA")
       .wait("first")
    ,
    newTimer(500)
        .start()
        .wait()
  )
  .log( "age" , getVar("Age") )
  .log( "gender" , getVar("Gender") )
)

PennController.Template( 
  variable => PennController( "practiceB" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeB1", "B_01.wav")
        .play()
    ,
    newImage("ImageVisPracticeB1", "B_1.jpg")
        .settings.size(1200,400)
    ,
    newCanvas(1250,400)
        .settings.add(   25 , 0 , getImage("ImageVisPracticeB1") )
        .print()
    ,
    getAudio("audPracticeB1")
       .wait("first")
    ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeB", "B_02.wav")
        .play()
    ,
    newImage("ImageVisPracticeB", "B_2.jpg")
        .settings.size(600,400)
    ,
    newImage("Pcov", "Covered_Box.jpg")
        .settings.size(600,400)
    ,
    newCanvas(1250,400)
        .settings.add(   0 , 0 , getImage("ImageVisPracticeB") )
        .settings.add( 650 , 0 , getImage("Pcov") )
        .print()
    ,
    newSelector()
        .settings.add( getImage("ImageVisPracticeB") , getImage("Pcov") )
        .settings.keys(          "F"    ,          "J"   )
        .settings.log()
        .wait()
    ,
    getAudio("audPracticeB")
       .wait("first")
    ,
    newTimer(500)
        .start()
        .wait()
  )
  .log( "age" , getVar("Age") )
  .log( "gender" , getVar("Gender") )
)

PennController.Template( 
  variable => PennController( "practiceC" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeC1", "C_01.wav")
        .play()
    ,
    newImage("ImageVisPracticeC1", "C_1.jpg")
        .settings.size(1200,400)
    ,
    newCanvas(1250,400)
        .settings.add(   25 , 0 , getImage("ImageVisPracticeC1") )
        .print()
    ,
    getAudio("audPracticeC1")
       .wait("first")
    ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeC", "C_02.wav")
        .play()
    ,
    newImage("ImageVisPracticeC", "C_2.jpg")
        .settings.size(600,400)
    ,
    newImage("Pcov", "Covered_Box.jpg")
        .settings.size(600,400)
    ,
    newCanvas(1250,400)
        .settings.add(   0 , 0 , getImage("ImageVisPracticeC") )
        .settings.add( 650 , 0 , getImage("Pcov") )
        .print()
    ,
    newSelector()
        .settings.add( getImage("ImageVisPracticeC") , getImage("Pcov") )
        .settings.keys(          "F"    ,          "J"   )
        .settings.log()
        .wait()
    ,
    getAudio("audPracticeC")
       .wait("first")
    ,
    newTimer(500)
        .start()
        .wait()
  )
  .log( "age" , getVar("Age") )
  .log( "gender" , getVar("Gender") )
)

PennController.Template( 
  variable => PennController( "practiceD" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeD1", "D_01.wav")
        .play()
    ,
    newImage("ImageVisPracticeD1", "D_1.jpg")
        .settings.size(1200,400)
    ,
    newCanvas(1250,400)
        .settings.add(   25 , 0 , getImage("ImageVisPracticeD1") )
        .print()
    ,
    getAudio("audPracticeD1")
       .wait("first")
    ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeD", "D_02.wav")
        .play()
    ,
    newImage("ImageVisPracticeD", "D_2.jpg")
        .settings.size(600,400)
    ,
    newImage("Pcov", "Covered_Box.jpg")
        .settings.size(600,400)
    ,
    newCanvas(1250,400)
        .settings.add(   0 , 0 , getImage("ImageVisPracticeD") )
        .settings.add( 650 , 0 , getImage("Pcov") )
        .print()
    ,
    newSelector()
        .settings.add( getImage("ImageVisPracticeD") , getImage("Pcov") )
        .settings.keys(          "F"    ,          "J"   )
        .settings.log()
        .wait()
    ,
    getAudio("audPracticeD")
       .wait("first")
    ,
    newTimer(500)
        .start()
        .wait()
  )
  .log( "age" , getVar("Age") )
  .log( "gender" , getVar("Gender") )
)

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