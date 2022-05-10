# Introduction

Policies are written using the [Rego language][rego]. The language is widely used
to create policies for different use cases such as authorization (see
[Open Policy Agent][opa]), configuration validation (see [conftest]()) and many
others.

Reposaur adopted Rego for it's simplicity, flexibility and easiness to read and
write.

This section describes how Reposaur uses Rego and gives an overview of the language,
but the reader is encouraged to read the [Policy Language documentation][rego]
for an in-depth introduction to the language.

Several examples of policies can be found in Reposaur's [policy library repository][policy-repo]
and in the [Writing your first policy guide](/guides/writing-your-first-policy).

[opa]: https://www.openpolicyagent.org/
[rego]: https://www.openpolicyagent.org/docs/latest/policy-language/#what-is-rego
[conftest]: https://github.com/open-policy-agent/conftest
[policy-repo]: https://github.com/reposaur/policy
