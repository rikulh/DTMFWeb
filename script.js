function boop(low,high) {
	const lowF = [697,770,852,941];
	const highF = [1209,1336,1477,1633];
	play(lowF[low]);
	play(highF[high]);
}
function play(f) {
	let context = new AudioContext();   // Audioコンテキストを作成
	osc  = context.createOscillator();  // オシレーター生成
	osc.frequency.value = f;  // 440Hz
	let gain = context.createGain();
	gain.gain.value = 0.05;
	osc.connect(gain);
	gain.connect(context.destination);   // 接続する
	osc.start(0);   
	osc.stop(context.currentTime + 0.5);
}

boop(0,0);