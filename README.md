<a href="https://github.com/apublicspace/solana"><img src="https://solana.com/_next/static/media/logotype.e4df684f.svg" width="220" alt="Solana"></a>

###

# Solana Developer Toolkit

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/apublicspace/solana/blob/master/LICENSE.md)

### Light-weight toolkit for Solana development

## Installation

Install @publicspace/solana with npm:

```
npm install @publicspace/solana
```

## Sign In With Solana

Import:

```
import { SIWS } from "@publicspace/solana"
```

Create SIWS instance:

```
const siws = new SIWS();
```

Package user message:

```
siws.package({ domain, address });
```

Generate user token for 30 minutes:

```
siws.token({ domain, address, statement, signature });
```

Generate user token with custom expiration:

```
siws.token({ domain, address, statement, signature, expiration });
```

Verify user certificate:

```
siws.certificate({ token });
```

## Generate Address or Verify Message

Import:

```
import { Wallet } from "@publicspace/solana"
```

Create Wallet instance:

```
const wallet = new Wallet();
```

Generate mnemonic:

```
wallet.mnemonic();
```

Generate keypair:

```
wallet.keypair();
```

Generate keypair from mnemonic:

```
wallet.keypairFromMnemonic({ mnemonic });
```

Generate keypair from mnemonic and passphrase:

```
wallet.keypairFromMnemonic({ mnemonic, passphrase });
```

Sign message

```
wallet.sign({ message, privateKey });
```

Verify message

```
wallet.verify({ message, signature, publicKey });
```
