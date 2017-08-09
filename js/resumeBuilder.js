var bio = {
    "name": "Vittal S Prabhu",
    "role": "Systems Engineer at Infosys",
    "contacts": {
        "mobile": "+91-997-254-5070",
        "email": "vittalsprabhu@gmail.com",
        "github": "Vittal-Prabhu",
        "linkedin": "linkedin.com/in/vittalsprabhu",
        "location": "Chennai"
    },
    "welcomeMessage": "",
    "skills": ["Programing Languages: C, JAVA, Python, HTML5, CSS3, JS, AngularJS", "Programming PLC in TwinCat and IndraLogic", "Database: MYSQL", "CAD Tools: SolidWorks"],
    "biopic": "images/Vittal.jpg"
        //Image Source: Vittal S Prabhu
};

var education = {
    "schools": [{
        "name": "B.V. Bhoomaraddi College of Engineering and Technology",
        "location": "Vidya Nagar, Hubballi, Karnataka 580031",
        "degree": "B.E",
        "dates": "2012-2016",
        "url": "http://www.bvb.edu",
        "majors": ["Automation & Robotics"]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Devlopment",
        "school": "Udacity",
        "dates": "September 2016",
        "url": "https://www.udacity.com"
    }, {
        "title": "Machine Learning Foundation Program",
        "school": "Udacity",
        "dates": "June 15 2017 to Present",
        "url": "https://www.udacity.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Systems Engineer",
        "location": "Chennai",
        "dates": "20 Feb 2016 - Present",
        "description": "Front-End Web Developer"
    }]
};

var projects = {
    "projects": [{
        "title": "Industrial Grade 3D Printer",
        "dates": "Jan 2016 - April 2016",
        "description": "3D printer capable of printing a prototype with estimated maximum printing size of 1x0.5x0.5 metres",
        "images": ["images/printer1.jpg", "images/printer2.jpg"]
            //Image Source: 3D Model by Vittal Prabhu as part of capstone project for A&R branch of BVBCET
    }, {
        "title": "Redesign control system for Proline Mechatronic System",
        "dates": "Feb 2015 - April 2015",
        "description": "To redesign control system for proline mechatronic system to access individual sub-assemblies separately through PC controlled PLC and to finally integrate control to define a given system",
        "images": ["images/ProlineMachine.jpg"]
            //Image Source: http://srpgroup.co.in/education/vocational-skill-development-kits/mechatronics-sensors-training-systems/
    }, {
        "title": "Data Acquisition System",
        "dates": "September 2014 - November 2014",
        "description": "To design a low cost multi-channel data acquisition system having different operating modes to measure any physical quantity",
        "images": []
            
    }, {
        "title": "Portable Charger for charging mobile using mechanical energy",
        "dates": "February 2014 - April 2014",
        "description": "Design an electro-mechanical charging device which can be used to charge mobile phones. The device has to be portable, easy to hand-carry. The device has to be an electro-mechanical device",
        "images": ["images/ShoeCharger2.jpg", "images/ShoeCharger1.jpg"]
            //Image Source: Developed as part of Mini project for A&R branch of BVBCET by Vittal Prabhu 
    }]
};

bio.display = function() {
    var data = "%data%";
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedImage = HTMLbioPic.replace(data, bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedName).append(formattedRole).append(formattedImage).append(formattedMessage);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedLinkedin = HTMLlinkedin.replace(data, bio.contacts.linkedin);
    $("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLinkedin).append(formattedLocation);
};

education.display = function() {
    var data = "%data%";
    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
        for (var school = 0; school < education.schools.length; school++) {
            var formattedName = HTMLschoolName.replace(data, education.schools[school].name);
            var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
            var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
            var formattedMajors = HTMLschoolMajor.replace(data, education.schools[school].majors);
            $(".education-entry:last").append(formattedName + " " + formattedDegree).append(formattedDates).append(formattedMajors).append(formattedLocation);
        }
    }
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (var classes = 0; classes < education.onlineCourses.length; classes++) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[classes].title);
            var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[classes].school);
            var formattedDate = HTMLonlineDates.replace(data, education.onlineCourses[classes].dates);
            var formattedUrl = HTMLonlineURL.replace(data, education.onlineCourses[classes].url);
            $(".education-entry:last").append(formattedTitle + " " + formattedSchool).append(formattedDate).append(formattedUrl);
        }
    }
};

work.display = function() {
    var data = "%data%";
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
        for (var job = 0; job < work.jobs.length; job++) {
            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle).append(formattedDates).append(formattedDescription);
        }
    }
};

projects.display = function() {
    var data = "%data%";
    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);
        for (var project = 0; project < projects.projects.length; project++) {
            var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
            $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
            if (projects.projects[project].images.length > 0) {
                for (var image = 0; image < projects.projects[project].images.length; image++) {
                    var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
