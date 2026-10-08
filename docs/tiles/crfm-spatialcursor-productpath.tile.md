# CRFM 0.5 — Spatial Cursor / Inward Traversal / Product Path
**Tile ID:** CRFM-SPT-2026-10-08-001
**Type:** Secured Protective Projective Tile (context preservation, not encryption)
**Date:** 2026-10-08
**Status:** ACTIVE / DEVELOPING / VALIDATION REQUIRED
**ARC trigger:** `&:crfm:spatialcursor:productpath`
**Related:** `&:CRFM:projective-route`, `&:crfm:reference-frame-reconstruction`, `&:crfm:live-environment`
**Tags:** #CRFM #ARC #EDIOS #SystemEDOS #spatial-cursor #reference-frame #inward-traversal #product-discovery #evidence-boundary #roadmap

## Protected principle
**Do not optimize CRFM merely to show more space. Optimize it to preserve understanding while the reference frame changes.**
Success means a user can identify what stayed the same, what changed, where they are, and how to return.

## Trajectory and timeline
- Early project: one continuous universe; pyramid, obelisk, golden axis; observer transitions through ground, atmospheric and larger frames; no duplicate landmarks or stitched panels. These were compositional aims, not verified physics.
- CRFM 0.2: executable Three.js environment with observer movement, fixed landmarks, trails, and diagnostic fixtures; existing ARC tile documents six movement checks. This does not establish a persistent internal world model in an AI.
- CRFM 0.4.3: experimental mobile Cube Wheel; two visible cubes (world cube plus navigation cube); orbit origin and pole restrictions. Baseline: https://lewalr.github.io/arcsystemCRFM/preview/
- CRFM 0.5 core, 2026-10-08: separated quaternion math, observer and instrument state, trajectories, regression tests. CI success: https://github.com/lewalr/arcsystemCRFM/actions/runs/37811842611
- CRFM 0.5 experiment, 2026-10-08: separate one-cube browser experiment, parametric gold field, Emission follows / Observation follows modes, touch gestures and reset. Publishing success: https://github.com/lewalr/arcsystemCRFM/actions/runs/37812501812 ; https://lewalr.github.io/arcsystemCRFM/experiment/
- Interpretation, 2026-10-08: user identified the cube as cursor, then an instrument establishing projection conditions, then an inward aperture for exploring within the view. These are design hypotheses.

## Architectural shift
**0.4.3:** steer a camera around a predefined scene.
**0.5 direction:** distinguish instrument state, observer pose, persistent field, and projection function. The cube is a possible **spatial cursor** specifying position, orientation, operation, and reference frame. The screen may function as an inward-looking navigable window rather than a physical hologram emitted outward.

**Crucial implementation limitation:** 0.5 browser rendering still uses simplified 2D screen-space field calculations and separate yaw/tilt variables; the core observer state does not yet drive a full world-to-camera transform. The prototype does not yet provide genuine continuous 3D inward traversal, depth picking, or validated parallax.

## Core design invariants
1. One underlying field; no duplicated objects to fake continuity.
2. Observer changes do not silently mutate world geometry.
3. Instrument, observer, field, and projection are independently measurable.
4. Continuous rotation over faces, corners and poles, without unexplained snap.
5. Reversible and replayable transforms within defined tolerances.
6. Perspective, occlusion, ordering and parallax consistent with world coordinates.
7. Independent instrument size and field scale.
8. No predetermined spherical, loop, tunnel or cosmic topology.
9. Touch-first usability, clear mode state, recovery/reset, performance.
10. Preserve SPECIFIED / OBSERVED / INFERRED / SYNTHESIZED / UNRESOLVED / VERIFIED distinctions.

## Proposed modes and interpretations
- **Emission follows:** projection anchor and direction follow instrument.
- **Observation follows:** underlying field stays fixed while viewpoint changes.
- **Inspection:** spatial selection and feature interrogation (future).
- **Trace/replay:** compare trajectories and restore a viewpoint (future).
- **Scale/time:** traverse levels of detail or time-indexed data (future).
All beyond the first two prototype modes are projections, not current capabilities.

## Falsifiable research program
**Experiment A — State integrity:** one source of truth for instrument, observer, field and camera; unit tests for transforms, inverse operations, handedness and world-space invariants.
**Experiment B — Real depth:** persistent 3D fixture, one occluded landmark, parallax and occlusion while traversing inward; compare projected coordinates with expected values.
**Experiment C — Comprehension:** blind tasks to recognize landmarks after frame changes and return to a marked viewpoint.
**Experiment D — Controls comparison:** same tasks with conventional orbit/pan/zoom; measure time, errors, orientation recovery, usability, and motion discomfort. Publish failures and null results.
**Experiment E — Generality:** repeat on actual geometry/education data, then CAD or volume data; evaluate whether mapping transfers.
**Experiment F — Nonobvious structure:** find known hidden relationships in controlled data; validate against ground truth. Do not confuse revealing existing data with sensing unknown phenomena.

## Product and market hypotheses
**Working category:** spatial reference-frame interaction / navigational aperture.
**Candidate value:** an embeddable spatial cursor for exploring persistent fields without losing orientation.
**Potential packaging:** mobile geometry learning app; reusable 3D interaction SDK; scientific/CAD inspection component; research logging instrument; AR/VR/light-field control layer; time-series/network/sensemaking explorer.
**Adjacent systems:** Three.js, CAD/Blender, ParaView, digital globes, robotics coordinate frames, graph visualization. Quaternion math and frame transformations are prior art. Distinctiveness, if any, requires demonstrated usability and integration value.
**Market validation:** interview real users, benchmark against alternatives, define buyer and use case, assess workflow integration and willingness to adopt/pay. Do not assert product-market fit or patentable novelty from current evidence.
**Protection:** GitHub commits give dated provenance, not patents or secrecy. Public repository tiles are public. Seek IP counsel before further disclosure if exclusivity matters; do not commit secrets, customer information or confidential inventions.

## Gated roadmap (no invented deadlines)
**P0 NOW:** preserve baseline, links, limitations and paired ARC/CRFM tile.
**P1:** implement full transform pipeline and deterministic tests.
**P2:** inward traversal MVP with stable landmarks, depth, occlusion, parallax and recovery.
**P3:** compare user comprehension against ordinary controls; revise on failure.
**P4:** demonstrate one meaningful vertical use (geometry education preferred initial candidate).
**P5:** product packaging: one-page proposal, demo, architecture, API sketch, competitive matrix, pilot brief, pricing hypotheses grounded in interviews.
**P6:** expand into scientific visualization, CAD, sensors, immersive interfaces, and potentially social/psychological perspective models only with their own validation and safeguards.
At each gate append date, commit, test evidence, result, contradiction, decision, and next step.

## Risk register
Visual spectacle mistaken for geometric correctness; mode ambiguity; untested topology; uncontrolled scope; overstated novelty; social/psychological inference presented as fact; public “secured” tile mistaken for confidential storage; tests mistaken for user validation; AI overriding user agency; revisions erasing negative evidence.
**Countermeasures:** invariants, explicit modes, controlled fixtures, phase gates, prior-art research, provenance and uncertainty, repository visibility check, usability tests, human final authority, append-only milestone logs.

## EDIOS commentary
**Observation:** cube → cursor → projection-condition instrument → inward aperture → traversable field emerged from the user's progressive interpretations.
**Inference:** the API should model operations on relationships, not merely animation commands.
**Challenge:** ordinary 3D games already allow entry into worlds; CRFM must demonstrate superior orientation-preserving comprehension, not claim novelty from inward navigation alone.
**Recommended next experiment:** a minimal persistent 3D world with two identifiable landmarks and one occluded feature; implement actual observer-driven projection, replay, and a baseline comparison.
**Protective question:** Are we validating a reproducible interaction principle or letting the metaphor outrun the mechanism?

## ARC routing
Trigger `&:crfm:spatialcursor:productpath`:
1. Retrieve both tile copies, earlier ARC CRFM tiles, linked code and tests.
2. Identify last verified gate, current branch and unresolved failures.
3. Keep evidence, inference and aspiration separate.
4. Propose the smallest falsifiable next experiment.
5. Do not overwrite production or older previews without approval.
6. Append dated milestone notes rather than silently rewriting prior evidence.
7. Preserve user agency: EDIOS contributes and challenges; the user decides.

**Related ARC tiles:** `04-Tiles/&:crfm:projectiveroute.tile.md`, `04-Tiles/&:crfm:referenceframe:reconstructionvalidator.tile.md`, `04-Tiles/&:crfm:liveenvironment:execution.tile.md`.

### Milestone log template
Date/time; branch/commit; version/URL; hypothesis; change; test; expected; observed; evidence; pass/fail/inconclusive; uncertainty; product implication; decision; next experiment.

**Checkpoint maxim:** Preserve ambition without inflation. Build continuity before spectacle. The field should remain intelligible when the frame changes.


ARC canonical: https://github.com/lewalr/ARC-System-0.0-/blob/main/04-Tiles/%26%3Acrfm%3Aspatialcursor%3Aproductpath.tile.md
