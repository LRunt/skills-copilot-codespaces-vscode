function skillsMember(){
    var member = {
        name: 'Jone',
        age: 30,
        skills: ['JavaScript', 'React', 'Node'],
        showName: function(){
            console.log(this.name);
        },
        showSkills: function(){
            this.skills.forEach(function(skill){
                console.log(skill);
            });
        }
    }
    return member;
}