// Lists of content for the Taliesin Generator.

let characterTraits = [
    'You are tough as steel, unbending and indomitable.',
    'You know you are canny, cunning, and clever: all three and no less.',
    'You know what the fates hold in store for you: a life of riches beyond measure.',
    'You are here to right the wrongs of the wicked, and to save the innocent.',
    'Whether in blood or in spirit, you know you were truly born noble.',
    'You\'ve seen worse than this: darkness, terror, and madness.',
    'You believe you are meant for greatness, fame, and to sit upon a throne.',
    'You know, deep inside, that you are doomed to die, to rot, to be forgotten.',
    'You are wary and sharp: you are no one\'s fool.',
    'You know that nothing can escape your watchful gaze and inquisitive mind.',
    'You are willing to do anything it takes to get what you want.',
    'You know that you are nimble and plucky: always in the right place at the right time.',
    'You are filled with dread at what is to come.',
    'You know that you are the one who should be in charge.',
    'You seek redemption: to be forgiven for what you have done or failed to do.',
    'For those evils your hand can avenge, you are prepared to seek justice.',
    'You are learned and worldly, unlike the lot amongst whom you find yourself.',
    'You know very well that you are smooth, charming, and silver-tongued.',
    'You worry that your heart is dark and rotten.',
    'You are filled with lightness, joy, and hope for the future, despite all that has come to pass.',
    'Death makes her home in your heart... none will challenge you without regretting it.',
    'You worry that you are losing your touch.',
    'You fear that you may yet come unhinged.',
    'Your heart is full of kindness and joy, to lift the spirits of those around you.',
    'Who could ever stop you from living a principled life? This much you know: only your own self.',
    'You know that you are far more valuable or skilled than the fools around you.',
    'You know that true beauty shines out from inside you.',
    'The anger inside drives you, indomitable and true, like an arrow to your prey\'s heart.',
    'You are meant for great deeds, to uncover lost secrets, and to bring light into dark places.',
    'You, alone, carry gloom and despair: wrapped around you like winter\'s cloak.',
    'You meet the challenges of life with stoicism and quiet, steadfast courage.',
    'You are possessed of a quick wit and a disarming smile.',
    'Your instincts, intuition, and imagination always lead you to the truth.',
    'Your ambitious spirit drives you: no barrier is insurmountable.',
    'It is only your relentless vigilance that keeps you and your companions alive.',
    'Subtlety and stealth, that is the way to the top of the mountain.',
    'You are not who you seem.'
]

let specialTraits = [
    'Perhaps you are an exiled noble, trying to regain your honour.',
    'Perhaps you are an exotic foreigner: lost in a storm, your ship wrecked upon these shores.',
    'Perhaps you are an assistant to an Imperial researcher, sent here on a quest to collect data for the Imperial Library; if so, you might carry a letter of proof and a leatherskin sketchbook.',
    'Perhaps you are the heir to a major throne, on a quest to prove yourself before you return home to claim it.',
    'Perhaps you are a barbarian prince or princess, far from home, heir to a proud but waning heritage.',
    'Perhaps you are the last of your kind...',
    'They whispered that you were the offspring of a divine being, only half mortal.',
    'It is rumoured that you were the result of a virgin birth.',
    'You also have a rare and special expertise, as an engineer: you know a lot about siege weaponry, fortifications, stone-masonry, tunneling, and map-making.',
    'You once created an artwork, or wrote a book, which has since taken on a life of its own.',
    'You have an excellent relationship with the region\'s most notable priest, priestess, shaman, prophet, or oracle.',
    'You know a famous craftsman, craftswoman, or inventor.',
    'You know a loremaster, who may divulge or research useful information.',
    'You are on good terms with someone powerful: perhaps the local Lord, Lady, Commander, or Mayor.',
    'You are the descendant of a renowned warlord or tyrant, killer of many.',
    'You know a highly-placed member of the Conclave, a mysterious and powerful organization that controls occult knowledge.'
]

let basicEquipment = [
    ' a hat',
    ' a barrel',
    ' a pumpkin',
    ' a ball-peen hammer',
    ' a bag of sex toys (lightly used)',
    ' a mighty battle axe'
]

let ethericFormulae = [
    ' Transfer Wounds',
    ' A Wizard\'s Candle',
    ' Nuclear Sex Explosion',
    ' Light Dem All on Fiah',
    ' A Tentacular Expository',
    ' Otiluke\'s Frozen Scrotum'
]

let FEATURES = {
    'A most particular expertise': [
        'Crafty and clever', 
        'Former priest',
        'Woodsman',
        'Cypherer',
        'Languages',
        'Former military'],
    'A nose for danger': [
        'Double-jointed',
        'Something was watching you',
        'Heightened sense of smell',
        'Slitted eyes',
        'Inner compass',
        'Demon touch'],
    'Well equipped': [
        'You have everything you need for adventuring',
        'You have the support of someone well-to-do',
        'You have a set of locks, keys, and manacles',
        'You ransacked an armoury once',
        'You are dressed like a noble',
        'You are outfitted for war'],
    'Tough as Nails': [
        'Hard cock'],
    'The Gods Smile Upon You': [
        'Smiling at the size of your tits'],
    'Touched by the Beyond': [
        'weird shit',
        'weirder still'],
    'Beyond Weird': [
        'homunculus and shit',
        'lots of formulae']
}

let basicWeapons = [
    'a cudgel',
    'a dagger',
    'a sickle',
    'a scythe',
    'a whip or scourge',
    'a wooden club',
    'a farmer\'s flail',
    'a hammer',
    'a hatchet',
    'a hunter\;s bow (and a dozen arrows)',
    'a pitchfork',
    'a wooden staff',
    'a wood-splitting axe',
    'a boning knife',
    'a hunting knife',
    'a stiletto',
    'a short spear',
]

let seriousWeapons = [
    'spiked gauntlet',
    'flanged mace',
    'morningstar',
    'battleaxe',
    'battle pike',
    'crossbow',
    'war hammer',
    'heavy flail',
    'spiked flail',
    'rapier',
    'trident',
    'scimitar',
    'longsword',
    'broadsword',
    'falchion',
    'halberd',
    'poleaxe',
    'greatsword',
    'maul',
    'zweihander',
    'sabre',
    'khopesh',
    'war club',
    'lance',
    'mancatcher',
    'longspear'
]

let missileWeapons = [
    'crossbow',
    'heavy crossbow',
    'trio of javelins',
    'longbow',
    'recurve bow',
    'throwing knives (5)',
    'pair of throwing axes',
    'sling and stones'
]

let armorTypes = [
    'lamellar armor (medium)',
    'banded mail (medium)',
    'leather buff coat (light)',
    'brigandine armor (medium)',
    'a coat of plates (heavy)',
    'chain mail (medium)',
    'a gambeson or \'padded jack\' (light)',
    'hauberk (chain shirt, medium)',
    'plate mail (heavy)',
    'scale mail (medium)',
    'steel cuirass (medium)',
    'cuir bouilli (light)',
    'animal hide armor (light)',
    'great lizard skin armor (light)',
    'bronze hoplite armor (medium)',
    'bone armor (light)',
    'bronze banded mail (medium)',
    'lacquered steel plate mail (heavy)',
    'tortoise or insect carapace armor (light or medium)',
    'bronze breastplate, engraved (medium)',
    'ceramic plates and stitched wood (medium)'
]
