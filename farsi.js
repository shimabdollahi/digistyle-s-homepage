String.prototype.toPersianDigits= function(){
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w){
        return id[+w]
    });
}

var S='در سال <strong>2016</strong> هستیم و هنوز نفهمیدم چه خبره!';
S=1245;
//alert(S.toIndiaDigits());
console.log(S.toPersianDigits);
// $("#log").html($('#log').html() + ""+S.toPersianDigits());