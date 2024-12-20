function skillMember(){
    var member = ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara', 'Anggota'];
    var listMember = document.getElementById("listMember");
    var i = 0;
    var text = "";
    for (i = 0; i < member.length; i++){
        text += "<li>" + member[i] + "</li>";
    }
    listMember.innerHTML = text;
}