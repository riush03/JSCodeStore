const denisModule = {
    name:'Denis Muriungi',

    denisConfig:{
        useCaching:true,
        language:'en',
    },

    saySomething()
    {
        console.log(`I am ${this.name}`);
    },

    reportDenisConfig()
    {
        console.log(`Caching is: ${this.denisConfig.useCaching? 'enabled':'disabled'}`);
    },

    //override the current configurations
    updateDenisConfig(newConfig)
    {
        if(typeof newConfig === 'object')
        {
            this.denisConfig = newConfig;
            console.log(this.denisConfig.language);
        }
    },
};

denisModule.saySomething();
denisModule.reportDenisConfig();

denisModule.updateDenisConfig({
    language:'fr',
    useCaching:false,
});

denisModule.reportDenisConfig();