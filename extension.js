class MathExtension {
    getInfo() {
        return {
            id: 'MathExtension',
            name: 'Math Extension',
            blocks: [
                {
                    opcode: 'power',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[ONE] ^ [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '2'
                        }
                    }
                },
                {
                    opcode: 'negate',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '- [ONE]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        }
                    }
                },
                {
                    opcode: 'negitive',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Negitive value of [ONE]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        }
                    }
                },
                {
                    opcode: 'constrain',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Constrain [ONE] between [TWO] and [THREE]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '2'
                        },
                        THREE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '20'
                        }
                    }
                },
                {
                    opcode: 'constrainHighOrLow',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Constrain [ONE] [HighOrLow] [TWO]",
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "10",
                        },
                        HighOrLow: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "High",
                            menu: 'HighOrLow'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "20",
                        }
                    }
                },
                {
                    opcode: 'pi',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Value of [INPUT]",
                    arguments: {
                        INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "??",
                            menu: 'PiMenu'
                        }
                    }
                },
                {
                    opcode: 'isEven',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "Is [ONE] [EVEN]?",
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "10",
                        },
                        EVEN: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "even",
                            menu: 'Even'
                        }
                    }
                },
                {
                    opcode: 'isDivisable',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "Is [ONE] divisable by [TWO]?",
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "5",
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "2",
                        }
                    }
                },
                {
                    opcode: 'isBetween',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "Is [ONE] btween [TWO] and [THREE]?",
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "5",
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "2",
                        },
                        THREE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "10",
                        }
                    }
                },
                {
                    opcode: 'square',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "[ONE] of [TWO]",
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "Square",
                            defaultValue: "square"
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "2",
                        }
                    }
                },
                {
                    opcode: 'squareRoot',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "[ONE] root of [TWO]",
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "Square",
                            defaultValue: "Square"
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "4"
                        }
                    }
                },
                {
                    opcode: 'greaterThan',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "[ONE] < [TWO] < [THREE]",
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "1"
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "5"
                        },
                        THREE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "10"
                        }
                    }
                },
                {
                    opcode: 'LessThan',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "[ONE] > [TWO] > [THREE]",
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "10"
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "5"
                        },
                        THREE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "1"
                        }
                    }
                },
                {
                    opcode: 'true',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "True",
                },
                {
                    opcode: 'false',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "False",
                },
                {
                    opcode: 'greaterThanOrEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "[ONE] ??? [TWO]",
                    arguments: {
                        ONE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: "10"
                            },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "5"
                        }
                    }
                },
                {
                    opcode: 'lessThanOrEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "[ONE] ??? [TWO]",
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "5"
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "10"
                        }
                    }
                }
            ],
            menus: {
                HighOrLow: {
                    items: ['high', 'low']
                },
                PiMenu: {
                    items: ['??', 'e']
                },
                Even: {
                    items: ['even', 'odd', 'prime', 'whole', 'positive', 'negitive']
                },
                Square: {
                    items: ['Square', 'Cube', 'Quartic']
                }
            }
        }
    }
    power(args) { return Math.pow(args.ONE, args.TWO); }
    negate(args) { return 0 - args.ONE; }
    negitive(args) { return 0 - Math.abs(args.ONE); }
    constrain(args) { if (args.ONE < args.TWO) { args.ONE = args.TWO } if (args.ONE > args.THREE) { args.ONE = args.THREE } return args.ONE; }
    constrainHighOrLow(args) { if (args.FOO == "High" && args.ONE > args.TWO) { args.ONE = args.TWO } if (args.FOO == "Low" && args.ONE < args.TWO) { args.ONE = args.TWO } return args.ONE; }
    pi(args) { if (args.INPUT == "??") { args.INPUT = Math.PI } if (args.INPUT == "e") { args.INPUT = Math.E } return args.INPUT; }
    isEven(args) { var trueOrFalse; if (args.EVEN == 'even') { if (args.ONE % 2 == 0) { trueOrFalse = true } else { trueOrFalse = false; } } if (args.EVEN == 'odd') { if (args.ONE % 2 == 0) { trueOrFalse = false } else { trueOrFalse = true; } } if (args.EVEN == 'prime') { for (var i = 2; i < args.ONE; i++) { trueOrFalse = true; if (args.ONE % i === 0) trueOrFalse = false; } } if (args.EVEN == 'whole') { var i = Math.round(args.ONE); if (i === args.ONE) { trueOrFalse = true } else { trueOrFalse = false; } } if (args.EVEN == 'positive') { if (args.ONE > 0) { trueOrFalse = true } else { trueOrFalse = false; } } if (args.EVEN == 'negitive') { if (args.ONE < 0) { trueOrFalse = "true" } else { trueOrFalse = false; } } return trueOrFalse; }
    isDivisable(args) { if (args.ONE % args.TWO == 0) { return true } else { return false }; }
    isBetween(args) { if (args.THREE >= args.ONE && args.ONE >= args.TWO) { return true; } else { return false; } }
    square(args) { if (args.ONE == 'square') { args.ONE = 2; return Math.pow(args.TWO, args.ONE); } if (args.ONE == 'cube') { args.ONE = 3; return Math.pow(args.TWO, args.ONE); } if (args.ONE == 'quartic') { args.ONE = 4; return Math.pow(args.TWO, args.ONE); } }
    squareRoot(args) { if (args.ONE == 'Square') { args.ONE = 2; } if (args.ONE == 'Cube') { args.ONE = 3; } if (args.ONE == 'Quartic') { args.ONE = 4; } return Math.pow(args.TWO, 1 / args.ONE); }
    true() { return true; }
    false() { return false; }
    greaterThan(args) {
        if (args.ONE < args.TWO && args.TWO < args.THREE) {
            return true;
        } else {
            return false;
        }
    }
    lessThan(args) {
        if (args.ONE > args.TWO && args.TWO > args.THREE) {
            return true;
        } else {
            return false;
        }
    }
    greaterThanOrEquals(args) {
        if (args.ONE >= args.TWO) {
            return true;
        } else {
            return false;
        }
    }
    lessThanOrEquals(args) {
        if (args.ONE <= args.TWO) {
            return true;
        } else {
            return false;
        }
    }
}
Scratch.extensions.register(new MathExtension());
