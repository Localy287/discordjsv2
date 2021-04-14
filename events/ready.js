module.exports =  async (client) => {
    client.server_blacklist.set("689659773293297694", true);
    client.server_blacklist.set("598731298609168414", true);
    client.bypass_user.set("359835581456580618", true);
    client.bypass_user.set("331615683173548033", true);
    console.log(`This is: ${client.user.tag}`)
}
