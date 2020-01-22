import GameConfig from './nodemqtt/interfaces/GameConfigInterface'

let gameConfig: GameConfig = {
  server: {
    // host: 'localhost',
    host: 'broker.orangepixel.hu',
    port: 8884,
    username: 'eexit',
    rejectUnauthorized: false,
    protocol: 'wss',
    password: 'Cirkusz1984',
    clientId: 'eexit_dashboard' + Math.random().toString(16).substr(2, 8)
  },
  gameId: 'secret-subway',
  gameName: 'Secret Subway',
  targetTime: 75 * 60,
  defaultLanguage: 'HUN',
  languages: ['HUN', 'ENG'],
  languageDependentNodes: ['ABC', 'ASD', 'A23'],
  missions: [
    {
      id: 'office',
      targetTime: 16 * 60,
      nodes: ['metro-edison', 'metro-console', 'metro-drawer', 'metro-nails', 'metro-minimetro', 'metro-player', 'metro-officelamp1', 'metro-officelamp2', 'metro-officelamp3']
    },
    {
      id: 'enginehouse',
      targetTime: 20 * 60,
      nodes: ['metro-totem', 'metro-disks', 'metro-slot', 'metro-lottery', 'metro-pipe', 'metro-generator', 'metro-generatordisplay']
    },
    {
      id: 'metro',
      targetTime: 7 * 60,
      nodes: ['metro-metroconsole', 'metro-dimmer']
    },
    {
      id: 'saloon',
      targetTime: 15 * 60,
      nodes: ['metro-mtdancefloor', 'metro-door', 'metro-snake', 'metro-statue']
    },
    {
      id: 'boudoir',
      targetTime: 15 * 60,
      nodes: ['metro-scrabble', 'metro-brain', 'metro-elevator', 'metro-elevatorengine']
    }
  ],
  nodes:
    [
      {
        id: 'metro-edison',
        baseTopic: 'MTEDISON',
        commonName: 'Edison',
        description: '6 retro bulbs in office',
        states: [
          'init',
          'unlock',
          'disable',
          'maintain',
          'suspend',
          'continue',
          'show'
        ],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-console',
        baseTopic: 'MTCONSOLE',
        commonName: 'Console',
        description: 'Capsule cell in office.',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-drawer',
        baseTopic: 'MTDRAWER',
        commonName: 'Drawer',
        description: 'Desk in office.',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend', 'continue'],
        initState: 'init',
        targetTime: 3 * 60
      },
      {
        id: 'metro-nails',
        baseTopic: 'MTNAILS',
        commonName: 'Nails',
        description: 'Colored nail puzzle in office.',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend', 'continue'],
        initState: 'init',
        targetTime: 2 * 60
      },
      {
        id: 'metro-minimetro',
        baseTopic: 'MTMINIMETRO',
        commonName: 'Mini metro',
        description: 'Metro mockup in office.',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend', 'continue'],
        initState: 'init',
        targetTime: 11 * 60
      },
      {
        id: 'metro-totem',
        baseTopic: 'MTTOTEM',
        commonName: 'Totem',
        description: 'Cable merging cloumn in engine house.',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 3 * 60
      },
      {
        id: 'metro-disks',
        baseTopic: 'MTDISKS',
        commonName: 'Disks',
        description: 'Rotatable in casino wardrobe.',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend', 'level2'],
        initState: 'suspend',
        targetTime: 3 * 60
      },
      {
        id: 'metro-slot',
        baseTopic: 'MTSLOT',
        commonName: 'Slot machine',
        description: 'Key puzzle in casino wardrobe.',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend'],
        initState: 'suspend',
        targetTime: 2 * 60
      },
      {
        id: 'metro-lottery',
        baseTopic: 'MTLOTTERY',
        commonName: 'Lottery',
        description: 'Key dispenser in casino wardrobe. ',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend', 'opengate'],
        initState: 'suspend',
        targetTime: 2 * 60
      },
      {
        id: 'metro-pipe',
        baseTopic: 'MTPIPE',
        commonName: 'Pipe',
        description: 'Water leveling in engine house.',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend'],
        initState: 'suspend',
        targetTime: 4 * 60
      },
      {
        id: 'metro-generator',
        baseTopic: 'MTGENERATOR',
        commonName: 'Generator',
        description: 'Wheelmatrix in engine house',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend'],
        initState: 'suspend',
        targetTime: 6 * 60
      },
      {
        id: 'metro-generatordisplay',
        baseTopic: 'MTGENERATORDISPLAY',
        commonName: 'Generator display',
        description: '3 indicator for Generator',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-metroconsole',
        baseTopic: 'MTMETROCONSOLE',
        commonName: 'Metro console',
        description: 'Metro calculator dashboard.',
        states: ['init', 'unlock', 'disable', 'maintain', 'WAITING_FOR_APPROVAL', 'gohome', 'goend'],
        initState: 'init',
        targetTime: 7 * 60
        // buttons: [
        //   {
        //     text: 'Grant approval',
        //     topic: 'MTMETROCONSOLE/approval',
        //     payload: JSON.stringify({ data: 1 })
        //   },
        //   {
        //     text: 'Revoke approval',
        //     topic: 'MTMETROCONSOLE/approval',
        //     payload: JSON.stringify({ data: 0 })
        //   }
        // ]
      },

      {
        id: 'metro-mtdancefloor',
        baseTopic: 'MTDANCEFLOOR',
        commonName: 'Dancefloor',
        description: 'B&W tiles.',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 12 * 60
      },
      {
        id: 'metro-door',
        baseTopic: 'MTDOOR',
        commonName: 'Door',
        description: 'Lit interface for dancefloor.',
        states: [
          'init',
          'unlock',
          'disable',
          'suspend',
          'maintain',
          'level1',
          'level2',
          'level3',
          'level4'
        ],
        initState: 'suspend',
        targetTime: 0
      },
      {
        id: 'metro-snake',
        baseTopic: 'MTSNAKE',
        commonName: 'Snake',
        description: 'Wire follow game in saloon.',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 3 * 60
      },
      {
        id: 'metro-statue',
        baseTopic: 'MTSTATUE',
        commonName: 'Statue',
        description: 'Statue of Pallas Athene',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-scrabble',
        baseTopic: 'MTSCRABBLE',
        commonName: 'Scrabble',
        description: 'Word puzzle in boudoir.',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 12 * 60
      },
      {
        id: 'metro-brain',
        baseTopic: 'MTBRAIN',
        commonName: 'Brain',
        description: 'Talking brain in boudoir.',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-officelamp1',
        baseTopic: 'MTOFFICELAMP1',
        commonName: 'Office lamp #1',
        description: 'Office smart light',
        states: [
          'init',
          'unlock',
          'disable',
          'maintain',
          'suspend',
          'continue',
          'show'
        ],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-officelamp2',
        baseTopic: 'MTOFFICELAMP2',
        commonName: 'Office lamp #2',
        description: 'Office smart light',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend', 'continue'],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-officelamp3',
        baseTopic: 'MTOFFICELAMP3',
        commonName: 'Office lamp #3',
        description: 'Office smart light',
        states: ['init', 'unlock', 'disable', 'maintain', 'suspend', 'continue'],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-dimmer',
        baseTopic: 'MTMETRODIMMER',
        commonName: 'Dimmer',
        description: 'Metro light dimmer.',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-player',
        baseTopic: 'MTPLAYER',
        commonName: 'Player',
        description: 'Metro background music.',
        states: ['init', 'unlock', 'disable', 'maintain'],
        initState: 'init',
        targetTime: 0
      },
      {
        id: 'metro-elevator',
        baseTopic: 'MTELEVATOR',
        commonName: 'Elevator',
        description: 'Elevator remote door',
        states: ['init', 'unlock', 'disable', 'maintain', 'call', 'arrive', 'fail'],
        initState: 'init',
        targetTime: 3 * 60
      },
      {
        id: 'metro-elevatorengine',
        baseTopic: 'MTELEVATORENGINE',
        commonName: 'Elevator engine',
        description: 'Elevator engine',
        states: ['init', 'unlock', 'disable', 'maintain', 'goup', 'godown'],
        initState: 'init',
        targetTime: 0
      }
    ]
}
export default gameConfig
