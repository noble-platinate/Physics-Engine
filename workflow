#Work flow of website 
**animated.js** > animates the block/string/pulleys 
**Question.js** > have variables for question page like question , number question its options
**Question-mobile.js** > this is Question.js resemblance for mobile responsiveness , so any changes you do in Question.js you need to also do that in Question-mobile.js.
**all_dick_n.json** > this files contain information for animation 
**Questiondata.js** > have objects for all question variables , like options , corrects answer , observations etc 
there are two version of every question i.e advance and basic , we were working on 70 questions so object 1 in Questiondata.js is for question 1 basic and object number 71 is for question 1 advance similarly others object 2 is for question 2 baisc and object 72 is for 2 advance 
**Nlmbasic.js** > handels frontend of basic section 
**Nlmadvance.js** > handels frontend of advance section 
**audios** > All functions for audios are in animated.js , we used <audio> tag and howl audio function in js
**Dashboard folder** > this have all files/functions that we are using in dashboard page called Content.js which is imported in Home.js of dashboard folder and then this home is inserted in main index.js 
**Content.js** > this have manly true graphs component imported , i.e <map/> and pie graph , I have mad raw control of values for x,y for graphs from a file called graphdata.js , this kind of file will be coming from backend (which is also need to be prepared in future)
**index.js** > all components routing has been done in this page 
**Videos folde**r > this folder handels first sec of webpage that is videos section 

**python code** to create quetionData array for Questiondata.js file from basic_step files , 


Datan = [
    {
      "stepName": "Find no.of unknowns",
      "stepStatus": "active",
      "stepNumber": 1,
    },
    {
      "stepName": "Use F= ma for each object",
      "stepStatus": "inactive",
      "stepNumber": 2,
    },
    {
      "stepName": "Constraint",
      "stepStatus": "inactive",
      "stepNumber": 3,
    },
    {
      "stepName": "Final answer",
      "stepStatus": "inactive",
      "stepNumber": 4,
    }
  ]
Datam = [
    {
      "stepName": "Find no.of unknowns",
      "stepStatus": "active",
      "stepNumber": 1,
    },
    {
      "stepName": "Use F= ma for each object",
      "stepStatus": "inactive",
      "stepNumber": 2,
    },
    {
      "stepName": "Understanding Constraint equation",
      "stepStatus": "inactive",
      "stepNumber": 3,
    },
    {
      "stepName": "Constraint",
      "stepStatus": "inactive",
      "stepNumber": 4,
    },
    {
      "stepName": "Final answer",
      "stepStatus": "inactive",
      "stepNumber": 5,
    }
  ]
chapterNumber ="chapterNumber"
chapterName = "chapterName"
steps = "steps"
questionNumber = "questionNumber"
questionDesc = "questionDesc"
steps = "steps"
questions = "questions"
question_dick = []
for i in range(140):
    
    new_question_dick = {};
    new_question_dick[ chapterNumber ] = 1;
    new_question_dick[ chapterName ] = "Newton's law";
   
    # print(chdata);
    # xdata = open("stepsch.json").read();
    if  i+1 > 70:
     new_question_dick[steps] = Datan;
    else:
     new_question_dick[steps] = Datam;
    questionsn = [];
    newsub_questions = {};
    newsub_questions[questionNumber] = i+1;
    newsub_questions[questionDesc] = "A red block and yellow block, both of mass 1 kg are in motion as follows. Determine the acceleration of the masses and the tension in the string.";
    a_steps = open("basic_step"+str(i+1)+".json");
    data = json.load(a_steps);
    newsub_questions[steps] = data;
    questionsn.append(newsub_questions);
    new_question_dick[ questions ] = questionsn;
    question_dick.append(new_question_dick);

a_file = open("qdatanew28.json", "w")
newqd = json.dump(question_dick, a_file)

git branch > https://github.com/Gaurav05082002/phyeng/tree/REAL 




