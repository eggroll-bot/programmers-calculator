# Programmer's Calculator

A programmer's calculator with many useful operations to programmers.

Go [here](https://bmak.xyz/portfolio/programmers-calculator) to see a demo.

## Download

To download binaries for this program, go [here](https://github.com/eggroll-bot/programmers-calculator/releases). Currently, there are installer and portable versions for Windows and Linux. macOS support is untested and requires building from source.

## How to build

1. Get Yarn if you don't already have it.

2. Run `yarn && yarn dist`.

## Web version

A web version of this calculator is available [here](https://progcalc.bmak.xyz/). Note that certain features may not work or may be buggy depending on your browser. Use the desktop version to ensure a consistent experience.

## Order of operations

The calculator follows the below order of operations. Higher precedence operations will be run before lower precedence operations. If operators have the same precedence, they will be run in the order specified by their associativity. LTR is left-to-right associativity. RTL is right-to-left associativity.

1. NOT, UNARY NEGATIVE - RTL

2. POW - RTL

3. MULTIPLY, DIVIDE - LTR

4. PLUS, MINUS - LTR

5. SLL, SRL32, SRA, ROL32, ROR32 - LTR

6. AND - LTR

7. XOR - LTR

8. OR - LTR
