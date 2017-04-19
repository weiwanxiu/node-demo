
// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', function() {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//   	var str = getType(chunk)
//     process.stdout.write('data中含有: ' + str);
//     getType(chunk)
//   }
// });

// process.stdin.on('end', function() {
//   process.stdout.write('end');
// });

// // 判断是否含有入中、英文、数字
// function getType(str){
// 	var arr = [];
// 	var Regular_obj = [ 
// 		{"name" : "数字" , "regular" : /[0-9]/g },
// 		{"name" : "中文" , "regular" : /[\u4e00-\u9fa5]/g  },
// 		{"name" : "英文" , "regular" : /[a-zA-Z]/g }
// 	]; 

// 	for (var i = 0;i<Regular_obj.length ; i++) {
// 		if ( Regular_obj[i].regular.test(str)){
// 		  	arr.push(Regular_obj[i].name)
// 		} 
// 	}
// 	return arr.join("、")
// 	// console.log("data中含有"+arr.join("、"),"\n")
// }


process.on('SIGINT', function () {
  console.log('Got a SIGINT. Goodbye cruel world');
  process.exit(0);
});

// 也可以忽略这个信号
process.on('SIGINT', function() {
  console.log("Ignored Ctrl-C");
});

// console.log(process.env )
/*

  { TERM_SESSION_ID: 'w0t0p0:20DF43BF-A345-438C-B1D7-769271D7D1B5',
  SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.gOfgvPNNlb/Listeners',
  Apple_PubSub_Socket_Render: '/private/tmp/com.apple.launchd.MKxstsXkeh/Render',
  COLORFGBG: '7;0',
  ITERM_PROFILE: 'Default',
  XPC_FLAGS: '0x0',
  LANG: 'zh_CN.UTF-8',
  PWD: '/Users/wwx/workspace/node-demo',
  SHELL: '/bin/zsh',
  TERM_PROGRAM_VERSION: '3.0.13',
  TERM_PROGRAM: 'iTerm.app',
  PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin',
  TERM: 'xterm-256color',
  HOME: '/Users/wwx',
  TMPDIR: '/var/folders/lc/wk49k06n7h7c9gvhq0nkfn_h0000gp/T/',
  USER: 'wwx',
  XPC_SERVICE_NAME: '0',
  LOGNAME: 'wwx',
  ITERM_SESSION_ID: 'w0t0p0:20DF43BF-A345-438C-B1D7-769271D7D1B5',
  __CF_USER_TEXT_ENCODING: '0x1F6:0x19:0x34',
  SHLVL: '1',
  OLDPWD: '/Users/wwx',
  ZSH: '/Users/wwx/.oh-my-zsh',
  PAGER: 'less',
  LESS: '-R',
  LC_CTYPE: 'zh_CN.UTF-8',
  LSCOLORS: 'Gxfxcxdxbxegedabagacad',
  AUTOJUMP_SOURCED: '1',
  AUTOJUMP_ERROR_PATH: '/Users/wwx/Library/autojump/errors.log',
  _: '/usr/local/bin/node' }

  */

