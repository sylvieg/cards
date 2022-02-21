# Cards

A card triage page with Angular (@angular/cli 11.2.18)

See instructions https://github.com/CardioLogs/card-triage

# My Remarks

* I did that in 4.5 hours  + 0.5h for https error handling
* I am using bootstrap
  - Bootstrap is helpful and simple for designing something clean at low cost and with documentation! I think documentation is my main reason to use bootstrap. A team can work with the same look and feel with a good documentation.
  - I used flex - was not really needed there - I am just used to it - same reason, it is clean and documented
* I am using sass
  - Mainly for the colors and fonts. I do not do a project anymore without a centralized source for colors and font to have consistency in the all project.
* I am not sure about the filter feature: in the instructions, it is patient name AND arrythmias. The arrow in the mockup seems to suggest a choice. I did a search on string on both. Perhaps a second version of the instructions ;-). This choice does not scaled. In a real project I will do something like typeahead.
* My own feedback: I could have fix all of these points with more time
  - My design is not sexy - just bootstrap... 
  - I wanted to do an accordeon on the done column - with by default all close. Because in a done column we do not need the details.
  - I wanted to add a last action date
  - I wanted to have the action on the Done column not so prominent as they are supposed not to be used
  - I never wrote unittests with angular. I would like to learn.
  - Missing overflow: hidden on both columns.
  - Otherwise, I think I did all the requirements. I like typescript, so it was not a problem for me. Conclusion: it was fun. Angular is fun to work with.

# Setup
* To install: npm install
* Run ng serve for a dev server. Navigate to http://localhost:4200/
* For the server, see instructions and download in the link at the top. Run npm run api

# Screenshot
![screenshot](https://github.com/sylvieg/cards/blob/master/src/assets/capture.jpg)
