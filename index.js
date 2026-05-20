export default {
  async fetch(request) {
    const userAgent = request.headers.get("user-agent") || "";
    const ip = request.headers.get("cf-connecting-ip") || "";

    const botUAs = [
      'facebookexternalhit', 'facebot', 'facebookbot',
      'adsbot', 'googlebot', 'bingbot', 'twitterbot',
      'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
      'crawler', 'spider', 'headless', 'phantom', 'python',
      'curl', 'wget', 'java/', 'apache-httpclient'
    ];

    const metaIPs = [
      '66.220.', '69.63.', '69.171.', '173.252.',
      '31.13.', '157.240.', '179.60.', '204.15.'
    ];

    const isBot = botUAs.some(b => userAgent.toLowerCase().includes(b));
    const isMeta = metaIPs.some(p => ip.startsWith(p));

    if (isBot || isMeta) {
      return new Response(null, {
        status: 302,
        headers: { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' }
      });
    }

    const numeros = [
      "5575936181399", // T53
      "5575936181416", // T58
      "5575936181417", // T59
      "5575928931011", // P126
      "5575928931086", // P130
      "5575928931019", // P131
      "5575928931229", // P142
      "5575936181317", // D148
      "5575936181140", // D68
      "5575928931232", // P136
      "5575936181316", // D149
      "5575936181357", // D167
      "5575928931107", // P133
      "5575936181314", // D145
      "5575936181441", // D165
      "5575936181340", // D163
      "5575936181358", // D168
      "5575936180912", // D26
      "5575936180989", // D39
      "5575936181333", // D158
      "5575936181410", // D169
      "5575936181335", // D160
      "5575928931112", // P134
    ];

    const mensagens = [
      "Fala Jota, me libera a boa de hoje, quero entrar!",
      "E ai JP, me libera aquela entrada, quero entrar hoje!",
      "Jotap, quero entrar hoje, me libera a boa!",
      "E ai Jota, me libera a oportunidade de hoje, quero entrar!",
      "Fala JP, quero entrar hoje, me libera ai!",
      "Jotap, me libera essa boa, quero entrar agora!",
      "E ai irmao, quero entrar hoje, me libera a boa!",
      "Fala Jota, me libera essa entrada pra eu entrar hoje!"
    ];

    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    const mensagem = encodeURIComponent(
      mensagens[Math.floor(Math.random() * mensagens.length)]
    );

    const url = /Android|iPhone|iPad/i.test(userAgent)
      ? `whatsapp://send?phone=${numero}&text=${mensagem}`
      : `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;

    return new Response(null, {
      status: 302,
      headers: { Location: url },
    });
  },
};
