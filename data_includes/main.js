PennController.ResetPrefix(null); // Initiates PennController

PennController.Sequence( "consent" , "welcome" , "practiceA" , "practiceB" , "practiceC" , "practiceD" , "experiment" , "send" , "final" ) //or you can randomize the experiment

PennController( "consent",
	newHtml("consent", "IbexConsentThai2019.html")
    .print()
	,
	newButton("continue", "ไปยังหน้าถัดไป")
	.settings.right()
    .print()
    .wait(
        getHtml("consent").test.complete()
            .failure( getHtml("consent").warn() )
    )
	)
	
	
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>ยินดีต้อนรับค่ะ</p>")
    ,
    newText("<p>ในการทดลองนี้ ท่านจะต้องเลือกว่ารูปภาพรูปไหนในสองรูปตรงกับเสียงบรรยายนะคะ</p>")
    ,	
    newText("<p>ท่านสามารถคลิกที่รูปภาพโดยตรง หรือกดปุ่ม <strong>F</strong> เพื่อเลือกรูปทางด้านซ้าย หรือกดปุ่ม <strong>J</strong> เพื่อเลือกรูปทางด้านขวาค่ะ</p>")
    ,
    newText("<p>โปรดกรอกอายุและเลือกเพศกำเนิดของท่านค่ะ</p>")
    ,
    newTextInput("age")
		.settings.length(2)
        .print()
    ,
    newText("อายุ")
		.settings.after( getTextInput("age") )
		.print()
	,
    newVar("age")
        .settings.global()
        .set( getTextInput("age") )
    ,
    newDropDown("GenderOptions", "")
    .settings.add("หญิง", "ชาย")
    .print()
	,
    newText("เพศกำเนิด")
    .settings.after( getDropDown("GenderOptions") )
    .print()
    ,
	newVar("gender")
        .settings.global()
		.set( getDropDown("GenderOptions") )
	,
	newText("<p>กรุณาใส่หูฟังและทดสอบว่าท่านได้ยินเสียงหรือไม่นะคะ</p>")
    ,
	newAudio("micTest1", "MicTest1.wav")
    .settings.once()
    .settings.log()
    .print()
    .wait()
	,
	newButton("play", "Play")
    .print()
    .wait()
	,
    newDropDown("micTestChoice", "")
    .settings.add("35", "87", "150", "200", "340")
    .print()
	,
    newText("เสียงที่ท่านได้ยินตรงกับเลขใดต่อไปนี้")
    .settings.after( getDropDown("micTestChoice") )
    .print()
    ,
	newVar("mic")
        .settings.global()
		.set( getDropDown("micTestChoice") )
	,
	newText(<p>"เมื่อกรอกและเลือกคำตอบทั้งหมดแล้ว กดปุ่มด้านล่างเพื่อเริ่มต้นการทดลองค่ะ"</p>)
	,
    newButton("เริ่มต้นการทดลอง")
        .print()
		.wait(
			getTextInput("age").test.text( /^\d\d$/ )
					.failure( newText("โปรดกรอกอายุของท่านด้วยค่ะ")
					.print())
			)
        .wait(
		getDropDown("GenderOptions").test.selected()
					.failure( newText("โปรดเลือกเพศกำเนิดของท่านด้วยค่ะ")
					.print())
			)
		.wait(
		getDropDown("micTestChoice").test.selected("200")
					.failure( newText("โปรดกดฟังเสียงและเลือกคำตอบที่ตรงกับเสียงค่ะ")
					.print())
			)
)
.log( "age" , getVar("age") )
.log( "gender" , getVar("gender") )
.log( "mic" , getVar("mic") )


// Start typing your code here

PennController( "practiceA" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeA1", "A_01.wav")
        .play()
    ,
    newImage("ImageVisPracticeA1", "A_1.jpg")
        .settings.size(900,600)
    ,
    newCanvas(1250,500)
        .settings.add(   "center at 50%" , "middle at 50%" , getImage("ImageVisPracticeA1") )
        .print()
    ,
    getAudio("audPracticeA1")
       .wait("first")
    ,
	clear()
	,
	newTimer(250)
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
  .log( "age" , getVar("age") )
  .log( "gender" , getVar("gender") )



PennController( "practiceB" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeB1", "B_01.wav")
        .play()
    ,
    newImage("ImageVisPracticeB1", "B_1.jpg")
        .settings.size(900,600)
    ,
    newCanvas(1250,500)
        .settings.add(   "center at 50%" , "middle at 50%" , getImage("ImageVisPracticeB1") )
        .print()
    ,
    getAudio("audPracticeB1")
       .wait("first")
    ,
	clear()
	,
	newTimer(250)
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
  .log( "age" , getVar("age") )
  .log( "gender" , getVar("gender") )


PennController( "practiceC" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeC1", "C_01.wav")
        .play()
    ,
    newImage("ImageVisPracticeC1", "C_1.jpg")
         .settings.size(900,600)
    ,
    newCanvas(1250,500)
        .settings.add(   "center at 50%" , "middle at 50%" , getImage("ImageVisPracticeC1") )
        .print()
    ,
    getAudio("audPracticeC1")
       .wait("first")
    ,
	clear()
	,
	newTimer(250)
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
  .log( "age" , getVar("age") )
  .log( "gender" , getVar("gender") )
  

PennController( "practiceD" ,
    newTimer(500)
        .start()
        .wait()
    ,
    newAudio("audPracticeD1", "D_01.wav")
        .play()
    ,
    newImage("ImageVisPracticeD1", "D_1.jpg")
         .settings.size(900,600)
    ,
    newCanvas(1250,500)
        .settings.add(   "center at 50%" , "middle at 50%" , getImage("ImageVisPracticeD1") )
        .print()
    ,
    getAudio("audPracticeD1")
       .wait("first")
    ,	
	clear()
	,
	newTimer(250)
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
  .log( "age" , getVar("age") )
  .log( "gender" , getVar("gender") )


PennController.Template( 
  variable => PennController( "experiment" ,
    newTimer(500)
        .start()
        .wait()
    ,
	newAudio("context", variable.ContextAudioFile)
        .play()
    ,
    newImage("ImageContext", variable.ContextImageFile)
        .settings.size(900, Math.round(variable.ContextImageFile.height*(900/variable.ContextImageFile.width)))
	,
    newCanvas(1250,500)
        .settings.add(   "center at 50%" , "middle at 50%" , getImage("ImageContext") )
        .print()
    ,
    getAudio("context")
       .wait("first")
    ,
	clear()
	,
	newTimer(250)
        .start()
        .wait()
    ,
    newAudio("description", variable.AudioFile)
        .play()
    ,
    newImage("visible", variable.ImageFile)
        .settings.size(600, Math.round(variable.ImageFile.height*(600/variable.ImageFile.width)))
    ,
    newImage("cov", "Covered_Box.jpg")
        .settings.size(600,400)
    ,
    newCanvas(1250,400)
        .settings.add( 0 , "middle at 50%" , getImage("visible") )
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
  .log( "age" , getVar("age") )
  .log( "gender" , getVar("gender") )
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