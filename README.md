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

### Use Server

Import:

```
import SIWS from "@publicspace/solana"
```

Prepare user authentication message:

```
SIWS.prepare({ domain, address });
```

Generate user token for 30 minutes:

```
SIWS.token({ domain, address, statement, signature });
```

Generate user token with custom expiration:

```
SIWS.token({ domain, address, statement, signature, expiration });
```

Verify user certificate:

```
SIWS.certificate({ token });
```

## Generate Address or Verify Message

### Use Client

Import:

```
import Wallet from "@publicspace/solana"
```

Generate mnemonic:

```
Wallet.mnemonic();
```

Generate keypair:

```
Wallet.keypair();
```

Generate keypair from mnemonic:

```
Wallet.keypairFromMnemonic({ mnemonic });
```

Generate keypair from mnemonic and passphrase:

```
Wallet.keypairFromMnemonic({ mnemonic, passphrase });
```

Sign message:

```
Wallet.sign({ message, privateKey });
```

Verify message:

```
Wallet.verify({ message, signature, publicKey });
```
