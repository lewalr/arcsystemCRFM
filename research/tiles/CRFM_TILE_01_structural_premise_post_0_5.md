# ARC / CRFM — Tile 01
## Structural premise after the CRFM 0.5 rerouting

**Tile ID:** `&:crfm:relational-manifold:post-0.5:structural-premise`  
**Date recorded:** 2026-10-08  
**Class:** Foundational research / methodological refinement  
**Status:** Working structural premise; not a demonstrated internal model of the image generator  
**Parent context:** ARC → CRFM → 0.5 experimental rerouting → multi-generation panoramic observer tests  
**Companion:** `&:crfm:relational-manifold:post-0.5:field-record-01`  
**Scope:** Structural interpretation of the research, not a claim that the current browser laboratory already implements it.

### 1. The rerouting

The CRFM laboratory and the CRFM generative method must not be conflated. The laboratory is an instrument for examining, measuring and refining the operation; CRFM itself is the underlying method of maintaining and transforming reference-frame relationships. The cube, pyramid and obelisk are continuing research objects rather than interchangeable motifs. The cube/instrument supplies a local reference and potential navigation origin; the pyramid and obelisk make identity, orientation, depth, occlusion and transformation legible. The invariant golden axis, when present, is a correspondence reference across scales, not permission to duplicate the world.

The 0.5 rerouting, as discussed, redirects attention from producing a particular iconic image toward understanding *how* the operation constructs coherent projections, what it preserves, and how to measure that preservation. The existing 0.5 experiment should not be mistaken for a verified generative world engine. The repository README currently describes an earlier baseline and is not evidence that all subsequent ambitions are implemented.

### 2. Central structural premise

**CRFM is a generative methodology for discovering and expressing continuous relational structure under changes of reference frame, observation, projection, and representational medium.** It is not a mandated visual style, a preselected 3D shape, or a requirement to render every result as literal three-dimensional space. Its recognizable 'handwriting' arises from how geometric and perceptual relationships are discovered, carried forward, reprojected, and constrained.

The core candidate invariant is **transformation-conditioned relational persistence**: an object or world can remain recognizable not merely through unchanged pixels or repeated landmark placement, but through a sufficient network of correspondences surviving permitted transformations. This is a hypothesis about observable outputs, not proof of the generator's latent computation.

### 3. Four separate layers that must not be collapsed

1. **World / scene identity (`G`)** — landmark identities, topology, relative placement, surfaces, and stable relationships. A world may remain the same even when an object disappears from the view.
2. **Observer pose (`O = (p,R)`)** — position `p` and orientation `R`; translation and rotation are separate controls. 'Between' specifies a relative region, not a coordinate; 'looking toward' constrains gaze but not necessarily exact yaw/pitch or optical centering.
3. **Projection / medium (`P_m`)** — perspective, field of view, crop, panoramic mapping, resolution, lens distortion, and what the medium can communicate. A still image may imply a trajectory without representing every frame; a 2:1 image is not by itself proof of a seam-closed equirectangular panorama.
4. **Environment / time (`E_t`)** — sun/moon appearance, illumination, atmosphere, reflections, weather and exposure. A lighting change need not entail a change in world geometry; a changed Moon appearance is not by itself evidence of physically modeled lunar rotation.

Working rendering relation: `I = P_m(G, O, E_t)`. This is an analytical decomposition, not a reverse-engineered account of image-generation internals.

### 4. The crucial new distinction: geometric compliance versus relational expressiveness

A prompt may impose *exact* constraints (camera coordinates, 180° yaw, fixed focal length, rigid geometry) or *relative* constraints ('between the instrument and pyramid', 'looking back toward the instrument', 'at night'). The latter leave an admissible family of viewpoints. A visually rich oblique view may satisfy a meaningful part of those constraints without matching one analyst's assumed endpoint. Therefore a render should not be labeled 'failed' merely because it does not resemble an unspoken exact camera pose.

However, freedom to choose a more informative projection is not permission to violate a truly explicit condition. **Constraint satisfaction** and **relational legibility** must be assessed separately. A composition can be expressive without being physically calibrated; a calibrated view can be correct while showing fewer landmarks.

A possible formulation, explicitly a research proposal rather than an observed internal algorithm:

`O* ∈ argmax_{O∈C} Q(P_m(G,O,E_t))`

Here `C` is the set of camera states satisfying the *actually stated* constraints and `Q` measures relational legibility, correspondence, and information made visible. The first research obligation is to determine `C` faithfully; only then ask what a projection optimizes.

### 5. Trajectory ambiguity as information

A single image often cannot identify a unique path through observer space. A view compatible with moving forward/down/around an instrument can resemble one obtained by moving sideways and rotating. Translation creates depth-dependent parallax; pure rotation largely changes bearings without the same parallax. Camera crop, wide-angle projection, object reconstruction and unknown dimensions further enlarge the ambiguity. Therefore retain a **set of plausible trajectories** until additional observations discriminate them.

`O(s) = (p(s),R(s))`, with `s` a trajectory parameter. An apparently partial turn may be an intermediate state, a different valid endpoint, or a composition synthesized to preserve landmarks. No single image decides among these.

### 6. Identity, topology, and the possibility of constructive completion

Distinguish (a) revealing geometry that was already present but occluded, (b) projecting existing geometry differently, (c) interpolating previously unspecified surfaces in a plausible way, and (d) actually modifying the world. The nighttime scene's prominent axial pathway illustrates this unresolved distinction: it could be an exposed route or a newly constructed compositional aid. CRFM should preserve provenance rather than quietly equating plausible completion with established world identity.

Identity is not synonymous with keeping the instrument at screen-left or pyramid centered. **World-space correspondence must be allowed to survive when screen-space composition reverses, crops, or occludes a landmark.** The instrument should remain itself even if it moves to center, right, behind the viewer, or entirely out of frame.

### 7. Cross-scale reference frames

The experiment began with local architectural references and exposed celestial references as an additional diagnostic. A provisional hierarchy is `observer ↔ instrument ↔ terrestrial installation ↔ Earth/sky ↔ Moon/Sun`, with all frames explicitly identified rather than collapsed into a single camera-centered picture. Apparent lunar displacement or crescent orientation may reflect observer pose, time, projection, artistic reconstruction or some combination; physically meaningful interpretation requires sky-coordinate and illumination checks.

The broader CRFM ambition remains one continuous world, not panels, duplicated celestial bodies, or copied monuments. The one-pyramid/one-obelisk/one-Earth/one-Moon/one-Sun/one-galaxy constraint remains a valuable identity test where those bodies are included.

### 8. What the image sequence actually establishes

**Observed:** strong recognizable continuity of landmark identities and broad landscape organization across object rearrangement, reframing, elevated viewpoint, and night lighting; an oblique nighttime view in which instrument and pyramid remain visible from an apparently altered observer location. **Plausible inference:** the generation process responds to relational descriptions and often preserves a compositional/spatial correspondence network. **Not established:** a persistent metric 3D world, exact rigid transforms, continuous camera path, correct 75° elevation, physical Moon dynamics, equirectangular seam closure, or a proven internal optimization objective.

### 9. Proposed laboratory instrumentation

- Maintain a **world landmark registry**: stable IDs, hypothesized 3D coordinates, topology, confidence, and image-space detections.
- Maintain an **instruction constraint ledger**: verbatim request; explicit versus inferred constraints; admissible pose region; unspecified degrees of freedom.
- Record **observer hypotheses**, not only one guessed pose: translation, yaw, pitch, roll, field of view, elevation and camera-side/front ambiguity.
- Track **pairwise landmark relations**: image bearings, scale ratios, occlusions, horizon crossings, apparent height and ordering.
- Separate **illumination and celestial** changes from geometric changes.
- Log **newly revealed versus newly synthesized** geometry as an uncertainty class.
- For 360 claims, test **left/right seam correspondence** and projection convention.
- Keep source images, prompt text, order of generations and provenance; a render's visual continuity is not itself a recorded camera transform.

### 10. Next falsifiable experiments

**A — Rotation-only:** lock a documented observer position; request successive 30° or 45° yaw increments without translation; check landmark bearing progression and whether pyramid disappears behind the observer while the instrument moves to forward center.

**B — Translation-only:** lock orientation; move along a defined baseline; measure depth-dependent parallax of nearby instrument versus distant obelisk and mountains.

**C — Same pose, different time:** hold world and camera fixed; vary illumination alone; inspect shadows, reflections, celestial movement and landmark stability.

**D — Occlusion test:** require the pyramid behind the viewer; see whether its identity persists through subsequent reverse views without being inserted into the current composition.

**E — Geometry-reveal test:** select a suspected newly exposed pathway; request a return view from an earlier pose and see whether its shape and junctions persist.

**F — Ambiguous versus calibrated prompt:** compare 'between, looking back' with an exact pose and forward bearing; determine whether expressiveness changes when the admissible set is narrowed.

### 11. EDIOS commentary — structural tile

**Remark 1 — The productive correction:** The breakthrough was not an image being declared successful; it was recognizing that the criterion of success had been smuggled in by the analyst. The user specified relative geometry. We prematurely substituted an exact 180° endpoint. CRFM should make that substitution visible whenever it happens.

**Remark 2 — The medium is a collaborator, not an excuse:** A still image can expose multiple relationships in one oblique projection; that is a genuine representational advantage. Yet 'the medium chose a better geometry' is an interpretation to test, not an automatic absolution of geometric contradictions.

**Remark 3 — Preserve the operation, not the wallpaper:** The instrument need not live forever at the left edge. A stronger invariant is its correspondence to the same installation through changing projections, including moments of absence.

**Remark 4 — Do not erase ambiguity too soon:** An unresolved family of trajectories is a research result. It tells us which additional observation will be informative.

**Remark 5 — Autonomy with the investigator:** EDIOS contributes candidate explanations, discriminating tests, and corrections; the investigator remains the authority over which premise to pursue and what constitutes a useful result.

### 12. Carry-forward statement

**The new CRFM structural premise:** Maintain a coherent relational world while permitting observer, environmental and medium transformations; evaluate the explicit constraints first, the richness of the resulting projection second, and preserve uncertainty about the hidden path or geometry until independent observations can resolve it. The research object is the operation that carries relationships forward—not a fixed visual arrangement.