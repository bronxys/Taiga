const fs = require("fs")
const chalk = require("chalk")

const menu = (prefixo, nomebot, nome, tempo, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭───[ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝘀 ]
├⪧ ${prefixo}playaudio [nome]
├⪧ ${prefixo}playvideo [nome]
├⪧ ${prefixo}playmix [cantor]
├⪧ ${prefixo}tiktokvideo [link]
├⪧ ${prefixo}tiktokaudio [link]
├⪧ ${prefixo}Mediafire {link}
╰─────── • 

╭───[ 𝗢𝘂𝘁𝗿𝗼𝘀 ]
├⪧ ${prefixo}bard [pergunta]
├⪧ ${prefixo}gerarnick [texto]
├⪧ ${prefixo}link
├⪧ ${prefixo}descobrirmusica [ft/vd]
├⪧ ${prefixo}metadinha
├⪧ ${prefixo}reiniciar
├⪧ ${prefixo}listonline
├⪧ ${prefixo}pinterest [desejo]
├⪧ ${prefixo}converter [video]
├⪧ ${prefixo}checkativo @
├⪧ ${prefixo}rankinativos
├⪧ ${prefixo}rankinativo
├⪧ ${prefixo}gtts pt [texto]
├⪧ ${prefixo}idiomas-gtts
├⪧ ${prefixo}tabela
╰─────── • 

╭───[ 𝗔𝗱𝗺𝗶𝗻𝘀 ]
├⪧ ${prefixo}bemvindo 1/0
├⪧ ${prefixo}antilink 1/0
├⪧ ${prefixo}anticontato 1/0
├⪧ ${prefixo}anticatalogo 1/0
├⪧ ${prefixo}antiloc 1/0
├⪧ ${prefixo}antiaudio 1/0
├⪧ ${prefixo}antivideo 1/0
├⪧ ${prefixo}antiimg 1/0
├⪧ ${prefixo}antidocumento 1/0
├⪧ ${prefixo}antinotas 1/0
├⪧ ${prefixo}antisticker 1/0
├⪧ ${prefixo}autoban 1/0
├⪧ ${prefixo}autosticker 1/0
├⪧ ${prefixo}x9visu 1/0
├⪧ ${prefixo}listanegra [558788...]
├⪧ ${prefixo}tirardalista [558788...]
├⪧ ${prefixo}hidetag [texto]
├⪧ ${prefixo}marcar
├⪧ ${prefixo}marcarwa
├⪧ ${prefixo}promover @
├⪧ ${prefixo}rebaixar @
├⪧ ${prefixo}linkgp
├⪧ ${prefixo}ban @
├⪧ ${prefixo}add @
├⪧ ${prefixo}listonline
├⪧ ${prefixo}nomegp [nome]
├⪧ ${prefixo}descgp [descrição]
├⪧ ${prefixo}fotogp [marcarft]
├⪧ ${prefixo}listabr
├⪧ ${prefixo}listafake
├⪧ ${prefixo}listaadmins
├⪧ ${prefixo}infogp 
├⪧ ${prefixo}novolink
├⪧ ${prefixo}grupo a/f
├⪧ ${prefixo}abrirgp 1 hora
├⪧ ${prefixo}fechargp 1 hora
├⪧ ${prefixo}apagar
├⪧ ${prefixo}mute @
├⪧ ${prefixo}unmute @
├⪧ ${prefixo}modobrincadeira 1/0
├⪧ ${prefixo}sorteio [txt]
├⪧ ${prefixo}sorteionumero [txt]
╰─────── • 

╭───[ 𝗕𝗿𝗶𝗻𝗰𝗮𝗱𝗲𝗶𝗿𝗮𝘀 ]
├⪧ ${prefixo}perfil 
├⪧ ${prefixo}cassino
├⪧ ${prefixo}gay
├⪧ ${prefixo}feio	
├⪧ ${prefixo}lixo
├⪧ ${prefixo}gado
├⪧ ${prefixo}burro
├⪧ ${prefixo}gordo
├⪧ ${prefixo}pobre
├⪧ ${prefixo}bonito
├⪧ ${prefixo}macaco
├⪧ ${prefixo}gostoso
├⪧ ${prefixo}gostosa
├⪧ ${prefixo}caçar
├⪧ ${prefixo}batalha [txt/txt]
├⪧ ${prefixo}sonic [txt]
├⪧ ${prefixo}sonic2 [txt]
├⪧ ${prefixo}mulher [txt]
├⪧ ${prefixo}homem [txt]
├⪧ ${prefixo}jogodaforca
├⪧ ${prefixo}forca
├⪧ ${prefixo}resetforca
├⪧ ${prefixo}minado
├⪧ ${prefixo}mina
├⪧ ${prefixo}mineshelp
├⪧ ${prefixo}minareset
╰─────── • 

╭───[ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿𝘀 ]
├⪧ ${prefixo}sticker [marcar]
├⪧ ${prefixo}f [marcar]
├⪧ ${prefixo}ttp [texto]
├⪧ ${prefixo}toimg [marcar]
├⪧ ${prefixo}togif [marcar]
├⪧ ${prefixo}attp1 [texto]
├⪧ ${prefixo}attp2 [texto]	
├⪧ ${prefixo}attp3 [texto]
├⪧ ${prefixo}attp4 [texto]
├⪧ ${prefixo}attp5 [texto]
├⪧ ${prefixo}attp6 [texto]
├⪧ ${prefixo}roubar 
├⪧ ${prefixo}emoji [😍]
╰─────── • 

╭──[ 𝗜𝗺𝗮𝗴𝗲𝗻𝘀 ]
├⪧ ${prefixo}neko2
├⪧ ${prefixo}zoro
├⪧ ${prefixo}luffy
├⪧ ${prefixo}sanji
├⪧ ${prefixo}ussop
├⪧ ${prefixo}nami
├⪧ ${prefixo}copper
├⪧ ${prefixo}naruto
├⪧ ${prefixo}minato
├⪧ ${prefixo}sasuke
├⪧ ${prefixo}sakura
├⪧ ${prefixo}boruto
├⪧ ${prefixo}sarada
├⪧ ${prefixo}mitsuki
├⪧ ${prefixo}orochimaru
├⪧ ${prefixo}tsunade
├⪧ ${prefixo}kakashi
├⪧ ${prefixo}killua
├⪧ ${prefixo}gon
├⪧ ${prefixo}rimuru
├⪧ ${prefixo}sagiri
├⪧ ${prefixo}natsu
├⪧ ${prefixo}tanjirou
├⪧ ${prefixo}nezuko
├⪧ ${prefixo}senku
├⪧ ${prefixo}waifu
├⪧ ${prefixo}neko
├⪧ ${prefixo}megumin
├⪧ ${prefixo}awoo
├⪧ ${prefixo}shinobu
├⪧ ${prefixo}bully
├⪧ ${prefixo}cuddle
├⪧ ${prefixo}cry
├⪧ ${prefixo}hug
├⪧ ${prefixo}kiss
├⪧ ${prefixo}pat
├⪧ ${prefixo}lick
├⪧ ${prefixo}smug
├⪧ ${prefixo}bonk
├⪧ ${prefixo}yeet
├⪧ ${prefixo}blush
├⪧ ${prefixo}smile
├⪧ ${prefixo}wave
├⪧ ${prefixo}highfive
├⪧ ${prefixo}handhold
├⪧ ${prefixo}nom
├⪧ ${prefixo}bite
├⪧ ${prefixo}glomp
├⪧ ${prefixo}slap
├⪧ ${prefixo}kill
├⪧ ${prefixo}kick
├⪧ ${prefixo}happy
├⪧ ${prefixo}wink
├⪧ ${prefixo}poke
├⪧ ${prefixo}dance
├⪧ ${prefixo}cringe
╰─────── • 

╭──[ 𝗗𝗼𝗻𝗼 ]
├⪧ ${prefixo}seradm
├⪧ ${prefixo}sermenbro
├⪧ ${prefixo}boton 1/0
├⪧ ${prefixo}botoff 1/0
├⪧ ${prefixo}sair 
├⪧ ${prefixo}entrar [link]
├⪧ ${prefixo}ausente [texto]
├⪧ ${prefixo}voltei
╰─────── • 
`
}

exports.menu = menu

exports.cassino = (cassino11, cassino22, cassino33, cassino44, cassino55, cassino66, cassino77, cassino88, cassino99, pushname, sender) => {
return `
╭───────╯•╰───────╮
│ [ *Usuário* ]
│╭───•
││Nome: ${pushname}
││Número: +${sender.split("@")[0]}
│╰───•
│
│ [ *Cassino* ]
│╭───•
││➧ ${cassino11} │ ${cassino22} │ ${cassino33}
││➧ ${cassino44} │ ${cassino55} │ ${cassino66} 
││➧ ${cassino77} │ ${cassino88} │ ${cassino99}		  				    
│╰───•
╰───────╮•╭───────╯
`
}

