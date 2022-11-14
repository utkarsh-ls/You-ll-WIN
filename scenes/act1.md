# act1

```
SceneSetup.act1();
```

(...300)

n: AND THIS IS THE REPRESENTATION OF THE KID'S STRESS

n: _YOU_ ARE THE STRESS

{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}


# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Oh no , He is back. Greaaaat!!!

`hong({eyes:"0_neutral"})`

n: As you can see, he is streessed, you job is to cheer him up.

`bb({eyes:"look", mouth:"small_lock"})`

n: IN FACT, He is wasting too much time, thats why his rank is decreased to 721, He should study more than 8 hours.

n: QUICK, WARN HIM!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: Hey, Kid! Listen, we're in danger! The danger is...

`bb({body:"squeeze"})`

n4: (LET _YOUR_ STRESS COME OUT TO PLAY! PICK WHAT'S MOST SIMILAR TO WHAT _YOUR_ FEARS TELL YOU)

(#act1_normal_choice)

# act1_normal_choice

[We're studying less than 14 hours! Again!](#act1a_alone) `bb({body:"squeeze_talk"})`

[We're sleeping more than 4 hours!](#act1a_productive) `bb({body:"squeeze_talk"})`

[You're wasting too much time with your friends!](#act1a_bread) `bb({body:"squeeze_talk"})`

[]() ``

# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: Sir was saying that an average JEE student need to study, more than 14-16 hrs a day with full concentration ?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Holt-Lunstad 2010, PLoS Medicine)

`hong({eyes:"0_annoyed"})`

h: Um, thanks for reminding that but--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Which means if we don't start studying 14-16 hrs daily we will end up as a failure in life-

`bb({body:"panic"})`

b: Fu******ck!!

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.twentyhours = true`

n: YOU USED *FEAR OF BEING A FAILURE*

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: make a habit of studying atleast till 2 in the morning!

`hong({eyes:"0_annoyed"})`

h: Um, I'd rather not stay up that late in the nigh--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: If we don't sleep less than 4 hours, we will end up becoming a burden on our parents!

b: Our parents will be disappointed in us, and everyone will think we are lazy and useless. Then everyone will hate us, and we'll--

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: DIEEEEEEEEEEEEEEEEEEE

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "bad");
publish("hp_show");
```

(...2500)

`_.parasite = true`

n: YOU USED *FEAR OF DISAPPOINTING PARENTS*

(#act1b)

# act1a_bread

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich", eyes:"0_annoyed"});
```

h: Humans are social beings, hence spending some quality time with friends is necessary for mental health--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Neither mental health, nor your friends will help you in cracking JEE!

b: All our friends care about, is wasting our time. They don't care about our future, they don't care about our parents, they don't care about us--

`bb({body:"panic"})`

b: DIEEEEEEEEEEEEEEEEEEE

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "harm");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: YOU USED *FEAR OF BEING SOCIAL*

(#act1b)

# act1b

n: IT'S SUPER EFFECTIVE

`bb({mouth:"smile", eyes:"smile"});`

b: See, kid? I am your loyal guard-dog!

`bb({body:"pride_talk"});`

b: Trust your gut! Your feelings are always valid!

`bb({body:"pride"});`

n: GET THE KID'S ENERGY BAR TO ZERO

n: TO PROTECT THEIR PHYSICAL + SOCIAL + MORAL NEEDS, YOU CAN USE:

n: FEAR OF *BEING SOCIAL* #harm#

n: FEAR OF *BEING A FAILURE* #alone#

n: AND FEAR OF *DISAPPOINTING PARENTS* #bad#

`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: (PRO-TIP: PLAY THE CHOICES THAT PERSONALLY HIT YOUR DEEPEST, DARKEST FEARS!~)

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: you know what maybe it's time to check my phone.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: PROTECT YOUR HUMAN

n: FROM THE WORLD. FROM OTHER PEOPLE. FROM THEMSELF.

n: GOOD LUCK

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: ROUND ONE: *FIGHT!*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: Huh. Akrish messaged me about the group study happening this weekend.

`bb({eyes:"uncertain"});`

b: Doesn't that weirdo hosts a group study almost every weekend?

`bb({eyes:"uncertain_right"});`

b: What inner void are they trying to fill? They must be deeply messed up inside!

`hong({eyes:"surprise"});`

h: Also, He asked me to join?

`bb({eyes:"fear", mouth:"normal"});`

b: Well then!

[Say yes, or we'll fail since we don't know anything!](#act1c_loner)

[Say no, they are idiots!](#act1c_drugs)

[Ignore it, no one wants to study with us.](#act1c_sad)

# act1c_loner

{{if _.twentyhours}}
b: Everyone else is studying for at least 18-20 hours! TWENTY! HOURS! PER! DAY!
{{/if}}

{{if !_.twentyhours}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.twentyhours}}
b: We waste too much time sleeping and socializing! We need to study more!
{{/if}}

{{if !_.twentyhours}}
b: If we don't study enough, we will fail in JEE, and end up at some garbage college. Then no one will want to be near us, and we'll end up alone and miserable!
{{/if}}

{{if !_.twentyhours}}
b: and we will become HUMAN GARBAGE!
{{/if}}

{{if !_.twentyhours}} `_.humangarbage = true` {{/if}}

(...500)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.twentyhours}}
b: So yeah we should go to that group study!
{{/if}}

{{if _.parasite}}
b: Just bring your own notes, so we can do our own work, and not be distracted by those people.
{{/if}}

{{if _.whitebread}}
b: Just make sure we only study and not waste our time talking and listening to others.
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: GOD. If it'll make you shut up, fine.

h: I'll say yes.

{{if _.humangarbage}}
b: Human garbage, human! Human garbage!
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: or even worse... they will use us and will get ahead of us!
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: We'll waste so much time there, that later we will not even have time to eat but study and will end up as a failure!
{{/if}}

{{if !_.whitebread}}
b: We'll waste so much time that, we'll not have enough time to do our revision and will end up on streets!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: Besides, can't do group study, we need to do study by ourselves or we'll fail JEE, and become a burden on our parents!
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: GOD. If it'll make you shut up, fine.

h: I'll say no.

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.twentyhours}}
b: We only study for 12 hours, while everyone else is studying for 18-20 hours per day.
{{/if}}

{{if _.parasite}}
b: All we ever do at group studies is worry about how we should have spent more time studying for the topic and less time sleeping.
{{/if}}

{{if _.whitebread}}
b: All we ever do is worry about how the people at group studies are laughing and enjoying themselves instead of studying seriously.
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: wow! thanks for the compliment.

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: So if we go we'll make them feel bad about us, but if we reject their invite we'll also feel bad!

`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: ALL WE DO IS MAKE PEOPLE FEEL BAD, SO WE SHOULD FEEL BAD.

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");go we'll make them feel bad
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: Ugh. If it'll make you shut up, fine.

h: I'll ignore the invite.

`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: Anyway. Study is making me too anxious. I need something to calm me.

`hong({eyes:"neutral"});`

h: What's new on Facebook?

`bb({eyes:"look"});`

[Oh no, look at that horrible news story!](#act1d_news)

[Oh no, is that comment secretly about *us?*](#act1d_comment)

[Hey, a GIF of a cat drinking milk](#act1d_milk)


# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: God, it feels like the world's burning, isn't it?

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: It feels like it's all ending, like everything's dying and we're doomed and there's nothing we can do about it.

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: Let's like that story!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.badnews=true`

```
music('battle', {volume:0.5});
hong({mouth:"anger", eyes:"anger"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Okay I'll like it just please be quiet!

`hong({mouth:"neutral", eyes:"annoyed"});`

h: Screw it, let's look at Instagram.

(#act1e)


# act1d_comment

`bb({eyes:"fear"});`

b: It's a comment! A sneaky, sneaky comment!

`hong({eyes:"annoyed"});`

h: It's probably not?

`bb({eyes:"narrow", mouth:"small"});`

b: but what if they're all talking behind our back

h: They're n--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: IN FRONT OF OUR BACK

`hong({eyes:"sad", mouth:"sad"});`

h: I d--

`bb({eyes:"narrow", mouth:"small"});`

b: but *what if*

h: S--

`bb({eyes:"narrow_eyebrow"});`

b: *what if*

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
hong({mouth:"shut"});
```

h: ...

(...1000)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.comment=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: o-KAY, gonna try Instagram.

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: Heh ya that's cute, just reposted it, I thi--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: CATS CAN'T DIGEST MILK AND WE'RE TERRIBLE PEOPLE FOR ENJOYING ANIMAL ABUSE

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("18p", "bad");
```

(...2500)


`_.catmilk=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: o-KAY, gonna try Instagram.

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: Huh, photos from yesterday night. So *that's* what those weekly group studies are like.

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: Oof, looks way too crowded for my anxiety.

h: Maybe I shouldn't have said yes to the invite?

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[Change our answer? Like a jerk?!](#act1e_yes_dontchange)

[Change our answer! It's too crowded!](#act1e_yes_changetono)

{{if _.comment}}
[Yeah they were totally commenting about us.](#act1e_ignore_comment)
{{/if}}

{{if _.badnews}}
[Wait we liked without fact-checking.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.comment && !_.badnews)}}
[You know, you've got really bad posture?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: We are supposed to study more, like the people at group study. We can't say no, if we do, we wont' be able to study enough. Do you want to fail JEE!?

{{if _.twentyhours}}
b: STUDY! 20! HOURS! PER! DAY!
{{/if}}

{{if _.humangarbage}}
b: HUMAN. GARBAGE.
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Shut up shut up I'll keep it as yes!

(#act1g)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Don't you know about how human producitivty decreases with more number of people?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: In 2007 a Harvard study was conducted to measure productivity of a group of people. They found out that the productivity per person decreases by about 23% each time the number of people in the group increases by 2.


```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: DO YOU WANT THAT TO HAPPEN TO US-

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: SAY NO SAY NO SAY NO SAY NO SAY NO SAY NO SAY NO SAY NO SAY N-


```
bb({body:"normal", eyes:"fear", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
hong({eyes:"anger", mouth:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Shut up shut up I'll change my answer to no! God!

(#act1g)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... that looks really useful, it seems to be productive.

h: Maybe I shouldn't have said no to the invite?

`bb({mouth:"normal", eyes:"normal"});`

[Change our answer? Like a jerk?!](#act1e_no_dontchange)

[Change our answer! Don't die unproductive!](#act1e_no_changetoyes)

{{if _.comment}}
[Yeah they were totally commenting us.](#act1e_ignore_comment)
{{/if}}

{{if _.badnews}}
[Wait we liked it without fact-checking.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.comment && !_.badnews)}}
[You know, you've got really bad posture?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: Everybody was counting on us!

b: ...to leave them alone and let them have a nice group study without a useless moron like u--


```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
bb({body:"normal", eyes:"uncertain", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Shut up shut up I'll keep it as no!

(#act1g)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Studies indicate that group studies help increase the productivity of everyone in the group by a factor of 18%.

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.twentyhours}}
b: STUDY! 20! HOURS! PER! DAY!
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Shut up shut up I'll change my answer to yes! God!

(#act1g)

# act1e_ignore_comment

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: People are finally starting to notice that we are not studying enough!

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: We are gonna be the laughing stock of the whole class! They are gonna make fun of us for the rest of our lives!


```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Why are you like this?!

(#act1g)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: We're spreading disinformation! Now everyone from Kota will fail in JEE, instead of just us!

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: We're the reason Delhi will arise from the rubble of Kota, as the next hotspot for JEE coaching!

```
bb({body:"normal", eyes:"anger"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
_.factcheck = true;
```

h: Why are you like this?!

(#act1g)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Do you want to have a pretzel for a spine?! Stop hunching over your screen!

```
bb({body:"meta"});
```

b: That means you too.

```
bb({body:"normal", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Why are you like this?!

(#act1g)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... that looks really useful, it seems to be productive

h: Maybe I shouldn't have ignored the invite?

`bb({mouth:"normal", eyes:"normal"});`

[Keep ignoring, we're still gonna make everyone feel bad.](#act1e_ignore_continue)

[Actually, say yes.](#act1e_ignore_changetoyes)

[Actually, say no.](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: It's kinda rude to keep ignoring them though, no?

`bb({eyes:"normal_right"});`

b: Well other people always ignore *us*, so

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: so let's just call it even.

(#act1g)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: You're... letting me study with others? Even though I would be wasting their time?

b: Well, I mean, group study does increase productivity..., at least for people like you who don't study upto 20 hours a day.

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: It's too crowded, and we know more number of people leads to less productivity.

(#act1e_yes_changetono)

# act1g

```
bb({body:"normal", mouth:"normal", eyes:"look"});
hong({body:"2_tired"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
music(false);
```

h: ...

(...500)

h: i'm so sick of this game.

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.twentyhours}}"loneliness will kill us"... {{/if}}
{{if _.parasite}}"we're a society-parasite"... {{/if}}
{{if _.whitebread}}"don't eat that, it'll kill us"... {{/if}}
{{if _.comment}}"they're talking behind our back"... {{/if}}
{{if _.badnews}}"the world is burning"... {{/if}}
{{if _.catmilk}}"cats can't digest milk"... {{/if}}

h: i just want to live my life.

h: i just want to be free from all this... pain.

`bb({eyes:"look_sad"});`

b: Hey... kid...

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: It'll be okay.

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: As your loyal guard-dog, I'll always keep an eye out for danger, and do my best to keep you safe.

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: I promise.

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: Last app. Whatsapp. What you got?

`hong({eyes:"sad"});`

h: It's... more group study related chats.

`hong({mouth:"sad"});`

h: Everyone sounds so excited. Free from worry. Free from anxiety.

`hong({mouth:"anger"});`

h: God, why can't I be like them? Why can't I just be *normal?*

`bb({eyes:"normal_right"});`

b: Speaking of gruop studies, about this weekend's invite. Here's my FINAL decision:

`bb({eyes:"normal"});`

[We should go.](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[We should not go.](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: We sh--

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: *^FUCK^.*

`hong({body:"2_you"});`

h: YOU.

(...500)

b: w

(...1500)

`bb({eyes:"wat_2"});`

b: wha?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: I'm going to say YES to that group study,

{{if _.act1g=="go"}}
h: NOT because you want me to, but because *I* want to.
{{/if}}

{{if _.act1g=="dont"}}
h: Precisely BECAUSE you don't want me to.
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: You're NOT in control of me.

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: Now excuse me while I eat this delicious sandwich in ^goddamn^ peace.

`hong({body:"2_sammich_eat"});`

(...601)

```
sfx("sandwich");
hong({body:"2_sammich_eaten", eyes:"0_lookaway", mouth:"0_chew1"})
```

(...601)

```
bb({body:"normal", eyes:"uncertain", mouth:"shut"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
```

b: ...

```
bb({eyes:"normal_right"});
Game.OVERRIDE_TEXT_SPEED = 1;
```

b: ...

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 4;
```

b: ..................

(...500)

`bb({mouth:"normal"});`

[AHHHH WE'RE GONNA WASTE ALL OUR TIME WITH FRIENDS, AND BECOME A FAILURE](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH WE'RE GONNA FAIL JEE](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH WE'RE HORRIBLE AND WORTHLESS TO OUR PARENTS](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH WE'RE GONNA BECOME A FAILURE AAAAAAHHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "harm");
```

(...2500)

(#act1i)

# act1h_loneliness

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH WE'RE GONNA FAIL JEE AAAAAAHHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "alone");
```

(...2500)

(#act1i)

# act1h_worthless

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH WE'RE HORRIBLE AND WORTHLESS TO OUR PARENTS AAAAAAHHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "bad");
```

(...2500)

(#act1i)

# act1i

```
bb({mouth:"smile_lock", eyes:"smile", body:"normal"});
music('battle', {volume:0.5});
```

n: CONGRATULATIONS

(...500)

n: YOU'VE SUCCESSFULLY PROTECTED THE KID'S PHYSICAL + SOCIAL + MORAL NEEDS

n: WHY, LOOK HOW GRATEFUL THEY ARE!

(...500)

n: NOW THAT THEIR ENERGY IS ZERO, YOU CAN DIRECTLY CONTROL THEIR ACTIONS

`bb({mouth:"smile", eyes:"normal"});`

n: PICK YOUR ENDING MOVE

`bb({mouth:"small_lock", eyes:"fear"});`

n: *FINISH THEM*

[{FIGHT: Punish your stressful phone!}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{FLIGHT: Curl up in a ball and cry!}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: Your phone was giving you a panic attack!

`bb({eyes:"anger"})`

b: Zuckerberg and Co are hijacking your mental health for venture capitalist money, and trying!

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Punish your phone! Destroy it! Kill it!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL I--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: The whole world is filled with danger!

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Do like the armadillo! Curl up into a ball for self-defense!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CR-- 

(#act1j)

# act1j

`SceneSetup.act1_outro()`