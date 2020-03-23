# Quiz-Hmwk

// OVerview //

This document is an interactive multiple choice quiz that I created using some HTML, CSS, and mostly javascript. It consists of 5 multiple choice questions each question having for possible answers. Each question has a 30 sec timer if the timer runs out before the question is answered, that question will be marked as incorrect and the page will proceed to the next question.

The main purpose of the html was to incorporate tags that I could define in the JS file to create the actual web page by using the getElementById function as well as other methods to define value. 

The introduction and start button are the only text available in the HTML, but by adding an addEventListener and commanding the display of both elements to none upon clicking said start button. I was able to remove it from view and call upon the questions and choices i created by initializing the function I created for the questions array I defined, all under the same EventListener.

The same addEventListener also initializes the timer and progress bars, I created to become viewable. The timer was created by the renderCounter function I made and the progress bar by the renderProgress. 

By using if and else if functions I was able to define my correct answers and wrong answers as well as the timer running out having the same result as a wrong answer.

I was unsucessful in trying to create a highscore page that was called upon by the completion of the quiz.

I also refrenced a video created by the youtube channel Code Explained to help me along with giving my page functionality 
https://www.youtube.com/watch?v=49pYIMygIcU
