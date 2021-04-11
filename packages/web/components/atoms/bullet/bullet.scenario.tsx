enum kinds {
  available = 'available',
  requirements = 'requirements',
  confirmation = 'confirmation',
  welcome = 'welcome',
  paid = 'paid',
}

export interface ScenarioBulletProps {
  scenarioType?: kinds;
}

export const ScenarioBullet: React.FC<ScenarioBulletProps> = ({
  scenarioType,
}) => {
  const types = {
    available: {
      imgUrl:
        'https://a0.muscache.com/nextbnb/static/list_your_space/scenarios-meet-guest-eaa389217c2acc8887e3f88cc197f9fe.png',
      title: "You're available to host starting Dec. 21",
      description:
        'Lou is planning her trip and thinks your listing is perfect.',
    },
    requirements: {
      imgUrl:
        'https://a0.muscache.com/nextbnb/static/list_your_space/scenarios-arrival-534375c0dfd3291d3073949a00555d3c.png',
      title: 'Guests who meet Airbnb requirements can instantly book.',
      description:
        'In addition to meeting guest requirements, Lou agrees to your House Rules',
    },
    confirmation: {
      imgUrl:
        'https://a0.muscache.com/nextbnb/static/list_your_space/IB-only-message-illo-66933bcd7dfc0f2172c6a819cf92619e.png',
      title: 'Guests send a message with their booking confirmation.',
      description:
        "Lou says she'll be in town for work and she'd love to stay with you.",
    },
    welcome: {
      imgUrl:
        'https://a0.muscache.com/nextbnb/static/list_your_space/IB-only-keys-illo-11711142d4585a536643dddb8234bf3f.png',
      title: 'Welcome guests to your space',
      description:
        'Before Lou arrives, coordinate details like check-in time and key exchange.',
    },
    paid: {
      imgUrl:
        'https://a0.muscache.com/nextbnb/static/list_your_space/Illustration_WomanLaptop-6645d479058f6ae5d5aabb66a6fa5e2e.png',
      title: 'Get paid',
      description:
        'The day after Lou checks in, you’ll receive your money, minus a 3% service fee. You can add or change your preferred payout method in your Account Settings.',
    },
  };
  return (
    <div>
      <div className="mb-2">
        <img
          style={{ width: 150 }}
          src={types[scenarioType].imgUrl}
          alt="scenario img"
        />
      </div>
      <div className="mb-2">
        <h3 className="text-sm">{types[scenarioType].title}</h3>
      </div>
      <div className="mb-2">
        <p className="text-sm">{types[scenarioType].description}</p>
      </div>
    </div>
  );
};

export const scenario = (props) => {
  return {
    scenario: { component: <ScenarioBullet {...props} /> },
  };
};
