const featuresData = [
    {
        img: "https://help.goabstract.com/hc/theming_assets/01HZH4D4GACXWCRKK6JHQ730XD",
        title: "Using Abstract",
        desc: "Abstract lets you manage, version, and document your designs in one place.",
        link: "#"
    },
    {
        img: "https://help.goabstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878",
        title: "Manage your account",
        desc: "Configure your account settings, such as your email, profile details, and password.",
        link: "#"
    },
    {
        img: "https://help.goabstract.com/hc/theming_assets/01HZH4D3M8CRR0C2V5GREVR6HK",
        title: "Manage organizations, teams, and projects",
        desc: "Use Abstract organizations, teams, and projects to organize your people and your work.",
        link: "#"
    },
    {
        img: "https://help.goabstract.com/hc/theming_assets/01HZH4D38K1S1M9WKWSQZE62YE",
        title: "Manage billing",
        desc: "Change subscriptions and payment details.",
        link: "#"
    },
    {
        img: "https://help.goabstract.com/hc/theming_assets/01HZH4D3S3QY5190TZE3H8ZSVK",
        title: "Authenticate to Abstract",
        desc: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
        link: "#"
    },
    {
        img: "https://help.goabstract.com/hc/theming_assets/01HZH4D3G4S2K93BN3WJPT8600",
        title: "Abstract support",
        desc: "Get in touch with a human.",
        link: "#"
    }
];
const Features = () => {
    return (
        <div className="flex justify-center items-center w-full my-20 py-30 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-32 max-w-6xl w-full">
                {featuresData.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-6">
                        <img className="w-24 h-24 object-contain mt-1" src={feature.img} alt={feature.title} />
                        <div>
                            <h2 className="text-lg font-bold mb-1">{feature.title}</h2>
                            <p className="mb-2 text-base leading-relaxed text-gray-700">{feature.desc}</p>
                            <a className="text-[#4c5fd5] hover:underline text-sm font-semibold" href={feature.link}>
                                Learn More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;

