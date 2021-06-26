//event pada saat link di klik
$ ('.page-scroll').on('click', function(event){

	event.preventDefault();

	var tujuan = $(this).attr('href');

	var elemenTujuan = $ (tujuan);

	$('html, body').animate( {
		scrollTop : elemenTujuan.offset().top - 50


	}
	);
	



});