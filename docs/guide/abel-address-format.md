---
outline: deep
---

# Abelian Address Formats: Legacy Address and MLP Address

This document introduces the Legacy (ABEL Address v1) and Multi-Layer Privacy (MLP, ABEL Address v2) wallet address formats. It explains the reasons behind Abelian's upgrade to the MLP address and highlights the key differences between the two formats.

## 1. What are the Legacy Address and the MLP Address?

The Legacy Address is the original format for Abelian wallet addresses. It was designed for early adopters and basic privacy use cases.

The MLP (Multi-Layer Privacy) Address is an upgraded format designed to enhance privacy and functionality. It supports multiple privacy layers, such as fully-private and pseudo-private modes.

The key difference between the Legacy long address and the Multi-Layer Privacy (MLP) long address is the number of characters they occupy. Below is a summary of the character lengths for different versions:

-	**Legacy Long Address**: 11,759 characters
-	**MLP Long Address (Fully-Private)**: 11,892 characters
-	**MLP Long Address (Pseudo-Private)**: 11,452 characters

### Composition of Short Addresses

Short addresses are derived from long addresses using the following components:

```text
<Address Prefix> + <Privacy Type> + <Long Address Hash>
```

- Network Prefix: Identifies the type of address (e.g., Legacy, Fully-Private, Pseudo-Private).
  -	**Legacy short Address (Mainnet)**: `abe0`
  -	**Legacy short Address (Testnet)**: `abe3`
  -	**MLP short Address (Mainnet)**: `abe010`
  -	**V2 MLP short Address (Testnet)**: `abe012`

-	Privacy Type: A two-character identifier:
  -	**Fully-Private (MLP)**: `05`
  -	**Pseudo-Private (MLP)**: `06`

-	Long Address Hash: This includes:
  -	**Fingerprint**: 64 characters
  -	**Checksum**: 64 characters

### Visual Representation

Below is a visual breakdown of the short address structure:

![Short Adrress Visual Representation](/address/format.png)

-	**Prefix** (colored section for type identification)
-	**Privacy Type** (colored section for privacy level)
-	**Fingerprint** (64-character hash for uniqueness)
-	**Checksum** (64-character validation component)

## 2. Why Does Abelian Upgrade to the MLP Address?

The upgrade to the MLP address format reflects Abelian’s commitment to improving user experience, security, and adaptability in a rapidly evolving blockchain environment. Key reasons for the upgrade include:

-	**Enhanced Privacy**: The MLP format introduces distinct layers of privacy, allowing users to choose between fully-private and pseudo-private options based on their needs.
-	**Future-Proofing**: The new format aligns with upcoming features and products in the Abelian ecosystem, ensuring compatibility and scalability.
-	**Clearer Differentiation**: The structured prefix and privacy types make it easier for users to identify the address type and privacy mode at a glance.
