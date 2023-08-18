
import React from 'react'
import lateaudio from './pythonaudios/step_one_audio.mp3'

 function Audiogaurav(props) {

    var st = props.ste; // motion -> fbd -> constraint
        var subst = props.subste; // for fbd it goes from 1 to n_b + n_p , for contraint 1 to n_s
        // var subsubstep = props.threejssubsubstep; // 1 and 2 - used only for contraint , signifie sthe ends
        // var answerClicked = props.answerClicked
        // var iscorrect = props.iscorrect
        // var uselessvar = 0.55
    var lateplayer = document.getElementById('latest');

    if (st == "motion" && subst == 0) {
        lateplayer.src = lateaudio;
            lateplayer.play();
            setTimeout( ()=>{ lateplayer.pause();
                                   },50000 );
    }


  return (
    <audio src="lateaudio" id="latest" class="hidden" preload="none"></audio>
  )
}
export default Audiogaurav;