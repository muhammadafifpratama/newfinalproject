import React, { Component } from 'react';

class tes extends Component {
    state = {}

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{
                    __html: "A darkness has fallen over the town of Lorwich.  Monstrous hordes emerge from beyond the realm of nightmares to sow chaos on the land.  As one of four heroes, you must battle the minions of the old ones with the force of arms, and the power of illumination.  <br><br>Inspired by the writing of H.P. Lovecraft, Atari’s Alone in the Dark series is recognized as the “Father of the Survival Horror Genre”.  Alone in the Dark: Illumination explores this dark legacy in a terrifying action-horror experience.  <br><br>Battle through dynamic environments filled with bloodthirsty beasts.   Build your party as you rescue your companions including the Witch, Engineer and Priest, each with a unique set of special abilities and weapons.  <br><br>Danger lurks in every shadow.  While your friends may help, at the end of the night you are always Alone in the Dark.<br><br><ul class=\"bb_ul\"><li><strong>Four Unique Heroes</strong>:   The Hunter, the Witch, the Priest and the Engineer each offer unique gameplay experiences with distinctive weapons, skills and powers to unlock.<br></li><li><strong>Play as a Team or Alone in the Dark</strong>:  Play with all four characters in co-operative multiplayer mode, build smaller teams for greater challenge, or face the darkness alone.<br></li><li><strong>Diverse Environments</strong>:  Four campaigns with multiple levels take players through the blasted landscape of Lorwich, and deep below to unearth the mysteries of this forsaken township.<br></li><li><strong>Eldritch Horror</strong>:  Inspired by the writing of H.P. Lovecraft, beings from beyond madness,  including Roof Walkers, Shapes and Spawns will haunt your nightmares.<br></li><li><strong>Dynamic Environments</strong>: Interact with dynamic environmental puzzles to change the structure of the map and advance your quest. <br></li><li><strong>Harness the Power of Illumination</strong>:  Light up maps to create safe zones, and damage your foes.</li></ul>"
                }} />
            </div>
        );
    }
}

export default tes;